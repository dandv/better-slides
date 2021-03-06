var slideLocation = window.location.href.replace('edit', 'present');

function setStartSpeakersButton() {
    var old_element = document.getElementById('punch-start-presentation-left');
    if (old_element) {
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        var right = document.getElementById('punch-start-presentation-right');
        right.style.display = 'none';
        right.style.opacity = '0';
        var left = document.getElementById('punch-start-presentation-left');
        if (left.dataset.tooltip && typeof left.dataset.tooltip === 'string') {
            left.dataset.tooltip = left.dataset.tooltip.replace(/(\([\w\.\-\s\+]+?\))/i, '');
        }
        left.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('[GSMM] Clicked and going to url', slideLocation);
            window.location.href = slideLocation;
        }, { capture: true });
    } else {
        var title_bar = document.querySelector('.docs-titlebar-buttons');
        var btn_container = document.createElement('a');
        btn_container.href = slideLocation;
        btn_container.className = 'goog-inline-block jfk-button jfk-button-standard docs-titlebar-button';
        btn_container.style.marginRight = '0';
        btn_container.style.cursor = 'pointer';
        btn_container.style.textDecoration = 'none';
        btn_container.style.color = 'black';
        var label_container = document.createElement("span");
        label_container.innerHTML = 'Start presentation';
        btn_container.appendChild(label_container);
        title_bar.insertBefore(btn_container, title_bar.childNodes[0]);
    }
}

setStartSpeakersButton();