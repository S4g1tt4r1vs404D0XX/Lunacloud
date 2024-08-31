function redirectToEditor(language) {
    // Store the selected language in localStorage (optional, in case you need it later)
    localStorage.setItem('selectedLanguage', language);

    // Redirect to the appropriate editor page based on the selected language
    switch(language) {
        case 'Python':
            window.location.href = 'python_editor.html';
            break;
        case 'JavaScript':
            window.location.href = 'javascript_editor.html';
            break;
        case 'HTML':
            window.location.href = 'html_editor.html';
            break;
        case 'Lua':
            window.location.href = 'lua_editor.html';
            break;
        case 'Rust':
            window.location.href = 'rust_editor.html';
            break;
        case 'C++':
            window.location.href = 'cpp_editor.html';
            break;
        case 'C':
            window.location.href = 'c_editor.html';
            break;
        case 'C#':
            window.location.href = 'csharp_editor.html';
            break;
        default:
            window.location.href = 'editor.html'; // Default page if no match
            break;
    }
}
