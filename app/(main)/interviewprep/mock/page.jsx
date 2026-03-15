import React from "react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";

const MockInterviewPage = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/interviewprep">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

        <div>
          <h1 className="text-6xl font-bold gradient-title">Mock Interview</h1>
          <p className="text-muted-foreground">
            Test your knowledge with industry-specific questions
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Boost your confidence, sharpen your skills, and get interview-ready!
          </p>
        </div>
      </div>

      <Quiz />
    </div>
  );
};

export default MockInterviewPage;
