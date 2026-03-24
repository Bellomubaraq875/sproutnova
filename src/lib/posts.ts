// lib/posts.ts

const BACKEND_BASE_URL = "https://pyvotalehub-backend.onrender.com";

export interface Post {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    body: string;
    image: string;
    images: string[];
    date: string;
    author: string;
}

// Helper to ensure all images have a valid web URL
function toAbsoluteUrl(pathOrUrl: string | null | undefined): string {
    if (!pathOrUrl) return "/images/placeholder.jpg";

    // 1. Decode URI first to handle cases where %5C is already in the string
    let cleanPath = decodeURIComponent(pathOrUrl);

    // 2. Replace ALL backslashes (\) with forward slashes (/)
    cleanPath = cleanPath.replace(/\\/g, "/");

    // 3. Remove "public/" prefix if your backend sends paths like "public/uploads/..."
    if (cleanPath.startsWith("public/")) {
        cleanPath = cleanPath.replace("public/", "");
    }

    // 4. Return absolute URL
    if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
        return cleanPath;
    }

    // Ensure leading slash
    const finalPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
    return `${BACKEND_BASE_URL}${finalPath}`;
}

// Robust image resolver
export function resolvePostImage(post: any): string {
    const possibleImage =
        post.cover ||
        post.image ||
        post.thumbnail ||
        (Array.isArray(post.images) && post.images.length > 0 ? post.images[0] : null);

    return toAbsoluteUrl(possibleImage);
}

export function resolvePostImages(post: any): string[] {
    const images = post.images;
    if (!Array.isArray(images) || images.length === 0) {
        return [];
    }
    return images.map((img: string) => toAbsoluteUrl(img));
}

// Map backend post -> UI model
export function mapBackendPost(post: any): Post {
    const image = resolvePostImage(post);
    const images = resolvePostImages(post);

    let date = "Recent";
    if (post.created_at || post.date || post.published_at) {
        try {
            date = new Date(post.created_at || post.date || post.published_at).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            });
        } catch (e) {
            console.error("Date parsing error", e);
        }
    }

    const content = post.content || post.body || post.description || "";

    const plainText = content.replace(/<[^>]+>/g, '');
    const excerpt =
        post.excerpt ||
        (plainText.length > 0
            ? `${plainText.slice(0, 160)}${plainText.length > 160 ? "..." : ""}`
            : "Read more about this story.");

    return {
        id: String(post.id || post._id || post.slug),
        category: post.category?.name || post.category || "Stories",
        title: post.title || "Untitled Story",
        excerpt,
        body: content,
        image,
        images,
        date,
        author: post.author?.name || post.author || "LAB Foundation Team",
    };
}