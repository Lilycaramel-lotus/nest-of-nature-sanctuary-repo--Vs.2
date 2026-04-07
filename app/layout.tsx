import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://carameldigitalcontent.com"),
    title: {
        default: "Caramel Digital Studio",
        template: "%s | Caramel Digital Studio",
    },
    description:
    "Digital design and development studio specializing in intelligent websites, automation systems, and digital transformation.",
    openGraph: {
        type: "website",
        url: "https://carameldigitalcontent.com",
        title: "Caramel Digital Studio",
        description:
        "Digital design and development studio specializing in intelligent websites, automation systems, and digital transformation.",
        siteName: "Caramel Digital Studio",
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
