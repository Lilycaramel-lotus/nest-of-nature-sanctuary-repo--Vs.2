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
    alternates: {
        languages: {
            en: "https://nestofnature.co",
            af: "https://nestofnature.co/af",
            xh: "https://nestofnature.co/xh",
            zu: "https://nestofnature.co/zu",
        },
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
        <head>
            {/* Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                        
                        // Event tracking helper
                        window.trackEvent = function(eventName, eventData = {}) {
                            if (window.gtag) {
                                gtag('event', eventName, eventData);
                            }
                        };
                    `,
                }}
            ></script>
        </head>
        <body>{children}</body>
        </html>
    );
}
