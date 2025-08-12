//

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="grid place-content-center mt-16">
      <SignUp signInFallbackRedirectUrl="/subscribe" />
    </div>
  );
}
