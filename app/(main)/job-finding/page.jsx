"use client";

import React, { useState } from "react";
import { jobsData } from "@/data/jobs";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, ChevronRight, Tool, CheckCircle2 } from "lucide-react";

const JobFindingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col gap-10 mb-20 px-2">
        <div className="space-y-4 max-w-4xl">
           <Badge variant="outline" className="px-5 py-1.5 border-primary/20 text-primary bg-primary/5 font-bold tracking-[0.2em] uppercase text-[10px]">Ecosystem Explorer</Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            Modern IT <br /> <span className="bg-gradient-to-r from-primary via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">Career Paths.</span>
          </h1>
          <p className="text-muted-foreground/80 text-xl md:text-2xl max-w-3xl leading-relaxed tracking-tight pt-2">
            Explore 50+ specialized domains in the global technology sector and architect your next professional evolution.
          </p>
        </div>

        <div className="relative max-w-3xl group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search roles, skillsets, or categories..."
            className="pl-14 h-16 text-xl rounded-2xl bg-white/[0.03] border-white/10 focus-visible:ring-primary/40 focus-visible:bg-white/[0.05] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Dialog key={job.id}>
              <DialogTrigger asChild>
                <Card className="card-premium group cursor-pointer hover:border-primary/40 p-1">
                  <CardHeader className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-6">
                      <Badge variant="secondary" className="bg-white/5 text-muted-foreground border-white/5 font-bold tracking-wider text-[10px] uppercase">
                        {job.category}
                      </Badge>
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary opacity-50 group-hover:opacity-100 transition-all border border-primary/10 group-hover:bg-primary group-hover:text-white">
                        <Briefcase className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 flex-grow">
                    <p className="text-muted-foreground/70 line-clamp-2 text-base leading-relaxed mb-6 tracking-tight">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {job.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-[10px] px-2 py-0.5 border-white/10 text-muted-foreground bg-white/[0.02]">
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-[10px] text-muted-foreground/50 self-center font-medium">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <div className="px-8 py-5 border-t border-white/5 bg-white/[0.01] group-hover:bg-primary/5 transition-colors flex justify-between items-center text-xs font-bold text-primary uppercase tracking-widest">
                    Role Intelligence
                    <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="px-3 py-1 border-primary/30 bg-primary/5 text-primary">
                      {job.category}
                    </Badge>
                  </div>
                  <DialogTitle className="text-3xl font-bold text-foreground">
                    {job.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      About the Role
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </section>

                  <div className="grid md:grid-cols-2 gap-8">
                    <section>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          Core Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          Common Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.tools.map((tool) => (
                            <Badge key={tool} variant="outline" className="border-muted-foreground/30">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="pt-6 border-t flex justify-end gap-3">
                    <Button variant="outline" onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(job.title + " jobs")}`, "_blank")}>
                      Find Open Positions
                    </Button>
                    <Button onClick={() => window.open(`https://www.youtube.com/results?search_query=how+to+become+a+${encodeURIComponent(job.title)}`, "_blank")}>
                       Learning Path
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <h3 className="text-2xl font-semibold mb-2">No roles found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria.</p>
            <Button variant="link" onClick={() => setSearchQuery("")} className="mt-4">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFindingPage;
