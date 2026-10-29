import '../src/styles.css';

export const metadata = {
  title: 'Prasikshya Baral | Software QA Engineer',
  description:
    'Prasikshya Baral — Software QA Analyst and Automation Engineer portfolio.',
};

export const viewport = {
  themeColor: '#07111d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
