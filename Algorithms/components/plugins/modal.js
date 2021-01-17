Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSubling);
}

function noop() {}

function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div');
    }

    const wrap = document.createElement('div');
    wrap.classList.add('modal-footer');

    buttons.forEach(button => {
        const $button = document.createElement('button');
        $button.textContent = button.text;
        $button.classList.add('btn');
        $button.classList.add(`btn-${button.type}` || 'secondary');
        $button.onclick = button.handler || noop;

        wrap.appendChild($button);
    });

    return wrap;
}
 
 function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window" style="width: ${options.width || '600px'}">
                <div class="modal-header">
                    <span class="modal-title"> ${options.title || 'My window' } </span>
                    ${options.closable ? `<span class="modal-close" data-close="true"> &times; </span>` : '' }
                </div>
                <div class="modal-body" data-content>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Laborum recusandae hic et porro? Aut, magni.
                    </p>
                    ${options.content || ''}
                </div>
            </div>   
        </div>
    `);
    const footer = _createModalFooter(options.footerButtons); 
    footer.appendAfter(modal.querySelector('[data-content]'));
    document.body.appendChild(modal);
    return modal;
 }
 
 $.modal = function(options) {
    const ANIMATION_SPEED = 200;
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed');
            }
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide'); 
                closing = false;
                if (typeof options.onClose === 'function') {
                    options.onClose();
                }   
            }, ANIMATION_SPEED);
        },
    };

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close();
        }
    }

    $modal.addEventListener('click', listener);

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal);
            $modal.removeEventListener('click', listener);
            destroyed = true;
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html; 
        }
    });
 }