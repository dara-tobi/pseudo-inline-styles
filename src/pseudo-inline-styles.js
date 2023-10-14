const pseudoInlineStyles = {
  enable: function (options) {
    const defaultPseudoStyleTypes = ['active', 'focus', 'hover', 'visited', 'after', 'before', 'selected', 'first-child'];
    const pseudoStyleTypes = options?.pseudoStyleTypes ? [...defaultPseudoStyleTypes, ...options.pseudoStyleTypes] : defaultPseudoStyleTypes;

    const cssRules = [];

    // Iterate through the pseudo style types
    pseudoStyleTypes.forEach((pseudoStyleType) => {
      // Find elements with the specified pseudo style
      const elementsWithPseudoStyle = document.querySelectorAll(`[style*="${pseudoStyleType}"]`);

      // Loop through matching elements
      elementsWithPseudoStyle.forEach((element) => {
        const elementName = element.tagName.toLowerCase();
        const elementId = element.id ? `#${element.id}` : '';
        const elementClasses = element.className ? `.${element.className.split(' ').join('.')}` : '';
        const elementSelector = `${elementName}${elementId}${elementClasses}`;

        // Extract the inline style for the pseudo-class
        const elementInlineStyle = element.getAttribute('style');
        const pseudoStyleMatch = elementInlineStyle.match(new RegExp(`\\b${pseudoStyleType}:(.*?)(;|$)`));

        if (pseudoStyleMatch) {
          const pseudoStyleDefinition = pseudoStyleMatch[1];
          // Create the CSS rule
          const cssRuleForPseudoStyle = `${elementSelector}:${pseudoStyleType} { ${pseudoStyleDefinition.trim()}; }`;
          cssRules.push(cssRuleForPseudoStyle);
        }
      });
    });

    // Insert all the collected CSS rules into a style element
    if (cssRules.length > 0) {
      const styleSheet = document.getElementById('pseudo-inline-css');
      if (styleSheet) {
        styleSheet.innerHTML = cssRules.join('\n');
      } else {
        const newStyleSheet = document.createElement('style');
        newStyleSheet.id = 'pseudo-inline-css';
        newStyleSheet.innerHTML = cssRules.join('\n');
        document.head.appendChild(newStyleSheet);
      }
    }
  },
};
