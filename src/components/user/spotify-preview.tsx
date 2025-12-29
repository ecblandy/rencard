import { usePreview } from "@/providers/preview-provider";

function toSpotifyEmbed(url?: string) {
  if (!url || url.trim() === "") return null;
  if (!url.includes("open.spotify.com")) return null;

  const clean = url.split("?")[0];

  return (
    clean
      .replace("/intl-pt", "")
      .replace("open.spotify.com/", "open.spotify.com/embed/") +
    "?utm_source=generator&theme=0"
  );
}

export default function SpotifyPreview() {
  const { data } = usePreview();

  const embedUrl = toSpotifyEmbed(data.spotfyLink);
  if (!embedUrl) return null;

  return (
    <div className="mt-4 rounded-md bg-neutral-50">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/album/2FJ0GVWlaNzsTmc1YnFFyc?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
