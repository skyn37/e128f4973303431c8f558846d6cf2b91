//JavaScript DOM Manipulation
//Description:
//You're tasked with developing a JavaScript function that manipulates the Document Object Model (DOM) of any webpage to create a simplified and structured view. The function should perform the following actions:
//- Remove all multimedia content (images, videos, iframes) and CSS styles on the page.
//- Retrieve all elements from the page and put their textual content in a simple div element.
//- Set the width of each div element to match the width of the screen.
//- Insert a Sample banner element with size (728x90) between each DIV with content of your choice
//Requirements:
//- Use vanilla JavaScript to achieve the specified functionality. Do not rely on any libraries or frameworks.
//- Ensure that only div elements are left on the page after the manipulation.
//- The code should handle scenarios where different elements may contain nested multimedia content and CSS styles gracefully.
//- Ensure that after applying the function, the webpage contains only the div elements with each div spanning the width of the screen + the added banners.
//- Document your code to explain its purpose and any assumptions made.
//Example:
//Given an HTML page with various content, including elements containing textual content, images, videos, and iframes, applying the function should result in the following:
//- Multimedia content (images, videos, iframes) and CSS styles are removed.
//- The textual content is placed in different div elements.
//- All other content on the webpage is cleared, leaving only the div elements with each div spanning the width of the screen.
//- A banner with size of 728x90 is placed between each individual DIV element
//Additional Information:
//This task evaluates the candidate's proficiency in:
//- DOM manipulation using vanilla JavaScript.
//- Handling and traversing DOM elements effectively.
//- Understanding and implementing client-side responsiveness.
//- Ensuring graceful handling of various scenarios and edge cases.

function simplifyPage() {
    const scrapedContent = document.createElement('div');
    scrapedContent.style.width = '100%';

    function hasTextContent(element) {
        return element.childNodes.length === 1 && element.firstChild.nodeType === Node.TEXT_NODE && element.textContent.trim() !== '';
    }

    function scrapeElement(element) {
        // skip script and style elements
        if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
            if (hasTextContent(element)) {
                const div = document.createElement('div');
                div.style.width = '100%';
                div.textContent = element.textContent;
                scrapedContent.appendChild(div);
            } else {
                // recursively scrape child elements
                Array.from(element.childNodes).forEach(childNode => {
                    if (childNode.nodeType === Node.ELEMENT_NODE) {
                        scrapeElement(childNode);
                    }
                });
            }
        }
    }

    document.body.childNodes.forEach(childNode => {
        if (childNode.nodeType === Node.ELEMENT_NODE) {
            scrapeElement(childNode);
        }
    });

    document.body.innerHTML = '';

    document.body.appendChild(scrapedContent);

    // sample banner element between each scraped div
    const sampleBanner = document.createElement('div');
    sampleBanner.innerHTML = '<img src="https://via.placeholder.com/728x90" alt="Sample Banner">';
    const scrapedDivs = scrapedContent.querySelectorAll('div');
    scrapedDivs.forEach((element, index) => {
        if (index > 0) {
            scrapedContent.insertBefore(sampleBanner.cloneNode(true), element);
        }
    });
}


