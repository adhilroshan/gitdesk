

const platforms = [
  {
    name: "Windows",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
  },
  {
    name: "macOS",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: "Linux",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.004 0C5.376 0 0 5.373 0 12s5.376 12 12.004 12C18.63 24 24 18.627 24 12S18.63 0 12.004 0zm5.035 15.596c-.363.649-.867 1.127-1.454 1.387-.486.217-1.027.3-1.565.224-.23-.033-.459-.102-.682-.197-.373-.158-.735-.398-1.068-.744-.236-.245-.454-.551-.647-.922-.129-.254-.247-.54-.348-.862-.145-.463-.241-.994-.279-1.594-.014-.224-.02-.459-.016-.704.004-.24.018-.49.041-.75.045-.483.119-.952.219-1.4.082-.364.18-.71.292-1.032.22-.626.49-1.168.802-1.619.17-.247.353-.475.548-.684.232-.249.48-.473.742-.672.245-.186.503-.352.773-.498.29-.157.593-.29.907-.398.303-.104.617-.185.942-.241.313-.054.635-.087.966-.098l.097-.003h.092c.332.01.654.043.967.097.325.056.64.137.943.241.313.108.616.24.906.398.27.146.528.312.773.498.262.199.51.423.742.672.195.209.378.437.548.684.312.45.582.993.802 1.619.113.322.21.668.292 1.032.1.448.174.917.219 1.4.023.26.037.51.041.75.004.245-.002.48-.016.704-.038.6-.134 1.131-.279 1.594-.101.322-.219.608-.348.862-.193.37-.411.677-.647.922-.333.346-.695.586-1.068.744-.223.095-.452.164-.682.197-.538.076-1.079-.007-1.565-.224-.587-.26-1.091-.738-1.454-1.387-.32-.573-.508-1.285-.539-2.098-.006-.161-.004-.327.006-.497.018-.339.064-.687.139-1.038.065-.303.151-.607.259-.907.101-.281.222-.562.364-.837.124-.241.265-.479.424-.709.129-.188.269-.372.42-.549.148-.173.306-.339.474-.495.134-.125.276-.245.425-.357.126-.095.258-.184.396-.266.11-.065.223-.126.34-.182.098-.047.199-.09.303-.13.083-.032.168-.061.254-.087.067-.02.136-.038.205-.054.049-.011.099-.021.149-.03.028-.005.057-.01.086-.014.017-.002.034-.005.051-.007.012-.001.024-.003.036-.004.006 0 .012-.001.018-.002.004 0 .009-.001.013-.001h.008c.004 0 .008-.001.012-.001h.011c.003 0 .007.001.01.001.005 0 .009.001.013.001.006 0 .012.002.018.002.012.001.024.003.036.004.017.002.034.005.051.007.029.004.058.009.086.014.05.009.1.019.149.03.069.016.138.034.205.054.086.026.171.055.254.087.104.04.205.083.303.13.117.056.23.117.34.182.138.082.27.171.396.266.149.112.291.232.425.357.168.156.326.322.474.495.151.177.291.361.42.549.159.23.3.468.424.709.142.275.263.556.364.837.108.3.194.604.259.907.075.351.121.699.139 1.038.01.17.012.336.006.497-.031.813-.219 1.525-.539 2.098z" />
      </svg>
    ),
  },
];

export function DownloadSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-t from-ui-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-base">
          Ready to ship <span className="text-gradient">better code</span>?
        </h2>
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
          Join developers who have already upgraded their Git workflow. Currently in <strong>Pre-Release</strong>.
        </p>

        {/* Main CTA Button */}
        <a
          href="https://github.com/adhilroshan/gitdesk-io/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-5 bg-ui-primary hover:bg-ui-primary-hover text-white rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-ui-primary/30 hover:-translate-y-1 cursor-pointer mb-8"
        >
          <span className="flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download for Windows
          </span>
        </a>

        {/* Platform Icons */}
        <div className="flex justify-center gap-8 mb-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`flex items-center gap-2 transition-colors ${platform.name === "Windows"
                ? "text-ui-primary font-medium"
                : "text-text-disabled cursor-not-allowed opacity-60"
                }`}
              title={platform.name === "Windows" ? "Available now" : "Coming soon"}
            >
              <div className="w-8 h-8 flex items-center justify-center">{platform.icon}</div>
              <span className="text-sm font-medium">
                {platform.name}
                {platform.name !== "Windows" && <span className="ml-1 text-[10px] uppercase tracking-wider opacity-70">(Soon)</span>}
              </span>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-secondary">
          <a href="#" className="hover:text-accent transition-colors cursor-pointer">
            View Documentation
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="#" className="hover:text-accent transition-colors cursor-pointer">
            GitHub Repository
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="#" className="hover:text-accent transition-colors cursor-pointer">
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}
