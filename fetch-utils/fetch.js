const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function postItNotes() {
    const response = await client
        .from('posts')
        .select('title, description, created_at, contact');

    return response.data;
}

export async function getPostItNotes(id) {
    const response = await client
        .from('posts')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}

export async function signIn(email, password) {
    await client.auth.signIn({ email, password });
    return (window.location.href = '/');
}

export async function signUp(email, password) {
    await client.auth.signUp({ email, password });
    return (window.location.href = '/');
}

export async function createPostIt(postIt) {
    const response = await client.from('posts').insert(postIt);
    return response;
}