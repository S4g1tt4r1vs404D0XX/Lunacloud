function redirectToEditor(language) {
    // Set the language (can be used in the editor if needed)
    localStorage.setItem('selectedLanguage', language);

    // Redirect to the editor page
    window.location.href = 'editor.html';
}
