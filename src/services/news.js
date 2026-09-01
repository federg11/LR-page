const NEWS_ENDPOINT =
  "https://smslatam.com/wp-json/wp/v2/posts?per_page=10&categories=24,46,49,26,70,1";

const cleanHTML = (html) => {
  if (typeof document === "undefined") return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "")
    .replace(/\u00a0/g, " ")
    .trim();
};

export const fetchNews = async () => {
  try {
    const res = await fetch(NEWS_ENDPOINT);
    const data = await res.json();
    if (!Array.isArray(data)) return [];

    const allNews = data.map((item) => ({
      source: "SMS Latam",
      title: item.title?.rendered ? cleanHTML(item.title.rendered) : "",
      description: item.excerpt?.rendered
        ? cleanHTML(item.excerpt.rendered).substring(0, 140) + "..."
        : "",
      link: item.link || "",
      fecha: item.date || "",
    }));

    allNews.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    return allNews;
  } catch (e) {
    console.error("Error fetching feed:", e);
    return [];
  }
};
