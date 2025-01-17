export default function Steps() {
  return (
    (<section className="w-full py-12 md:py-24" id="steps-cont">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:gap-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">How it Works</h2>
            <p className="text-muted-foreground md:text-lg">A step-by-step guide to getting started.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Profile Setup</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Build your foundation by entering your name, email address, LinkedIn URL, and GitHub URL. These details showcase your professional identity and technical skills.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <GraduationCapIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Build your foundation by entering your name, email address, LinkedIn URL, and GitHub URL. These details showcase your professional identity and technical skills.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <ComputerIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Project Highlights</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Add projects that demonstrate your expertise. Include a title, description, and links to live demos or code repositories.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Work Experience</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>List your previous work experiences with company names, roles, and key contributions.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <PuzzleIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Skill Spotlight</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Select skills that represent your strengths in programming, design, and other relevant areas.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <DownloadIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Download Your Code</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Download a compressed file containing all the code necessary to build your portfolio website.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <GithubIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Push to GitHub</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Upload the downloaded code files to your GitHub repository.</p>
              </div>
            </div>
            <div
              className="group relative rounded-lg border bg-card p-6 transition-all hover:bg-muted hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <WebcamIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">Deploy to a Platform</h3>
              </div>
              <div className="mt-4 text-muted-foreground group-hover:block">
                <p>Use a deployment platform like Vercel to make your website publicly accessible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function ComputerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>)
  );
}


function DownloadIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function PuzzleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>)
  );
}

function GraduationCapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function WebcamIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>)
  );
}
