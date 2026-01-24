/**
 * Monkey-patch fetch to use custom baseURL for Google Generative AI
 * This is needed because @google/generative-ai SDK doesn't support custom baseURL
 */

export function setupGeminiProxy(customBaseUrl?: string) {
    const baseUrl = customBaseUrl || process.env.GEMINI_BASE_URL;
    if (!baseUrl) {
        console.log('No custom Gemini baseURL configured, using default');
        return;
    }

    const originalFetch = globalThis.fetch;

    globalThis.fetch = async (input, init) => {
        const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

        // Replace Google Generative Language API endpoint
        if (url.includes('generativelanguage.googleapis.com')) {
            const newUrl = url.replace(
                'https://generativelanguage.googleapis.com',
                baseUrl
            );
            console.log('Proxied Gemini request:', url, '->', newUrl);

            if (typeof input === 'string') {
                input = newUrl;
            } else if (input instanceof URL) {
                input = new URL(newUrl);
            } else {
                input = {...input, url: newUrl};
            }
        }

        return originalFetch(input, init);
    };

    console.log('Gemini proxy enabled:', baseUrl);
}
