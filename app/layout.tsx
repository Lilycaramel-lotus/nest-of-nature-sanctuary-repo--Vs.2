import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://nestofnature.co"),
    title: {
        default: "Nest of Nature",
        template: "%s | Nest of Nature",
    },
    description:
    "A sanctuary for healing and empowerment supporting women facing domestic abuse in Cape Town's deep south. Founded by Nosipho Banzana.",
    openGraph: {
        type: "website",
        url: "https://nestofnature.co",
        title: "Nest of Nature",
        description:
        "A sanctuary for healing and empowerment supporting women facing domestic abuse in Cape Town's deep south.",
        siteName: "Nest of Nature",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
