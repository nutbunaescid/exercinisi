// Extended interface for the foreground style parameters
interface ExtendedForegroundStyle extends ForegroundStyle {
    textAlign?: string;
    textDecoration?: string;
}

// Updated function to set extended foreground styles
const setExtendedForegroundStyle = (element: HTMLElement, style: ExtendedForegroundStyle): void => {
    setForegroundStyle(element, style); // Apply basic styles
    if (style.textAlign) {
        element.style.textAlign = style.textAlign;
    }
    if (style.textDecoration) {
        element.style.textDecoration = style.textDecoration;
    }
};

// Updated example usage
document.addEventListener('DOMContentLoaded', () => {
    const myElement = document.getElementById('myElement');
    if (myElement) {
        // Apply extended foreground styles to the element
        setExtendedForegroundStyle(myElement, {
            color: 'green',
            fontSize: '18px',
            fontWeight: 'normal',
            textAlign: 'center',
            textDecoration: 'underline'
        });
    }
});
