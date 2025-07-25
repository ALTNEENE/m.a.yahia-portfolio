
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, FileText, Folder, Link as LinkIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { toast } from "@/components/ui/sonner";
import { API } from "@/lib/API";
import { profileData, ProfileType } from "@/data/profileData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [profile, setProfile] = useState<ProfileType>();

  const handleContactClick = () => {
    toast.success("Email address copied to clipboard", {
      description: `${profile?.contactEmail} is now in your clipboard`,
    });
    navigator.clipboard.writeText(profile?.contactEmail);
  };

  useEffect(() => {
    // const getProfile = async () => {
    //   try {
    //     const res = await API.get("/profile")
    //     if(res.status === 200){
    //       setProfile(res.data)
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getProfile()
    setProfile(profileData)
  }, [])


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                  {profile?.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
                {profile?.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {profile?.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleContactClick} className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href={profile?.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-full overflow-hidden border-4 border-primary/20 w-64 h-64">
                <img
                // https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
                  src="favicon.ico.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-5xl mx-auto">
          <Tabs
            defaultValue="projects"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  profile?.projects.map((project) => (
                    <ProjectCard 
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={project.image}
                      demoUrl={project.demoUrl}
                      codeUrl={project.codeUrl}
                    />
                  ))
                }
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">About Me</CardTitle>
                  <CardDescription>My journey and experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {
                    profile?.about.map((p) => (
                      <p>{p}</p>
                    ))
                  }
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/about">
                      <User className="h-4 w-4" />
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Work Experience</CardTitle>
                  <CardDescription>My professional journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {
                    profile?.workExperience.map((work) => (
                      <div>
                        <h3 className="text-lg font-bold">{work.title}</h3>
                        <p className="text-muted-foreground">{`${work.company} | ${work.period}`}</p>
                        <ul className="list-disc list-item ml-4 mt-2 space-y-1">
                          {
                            work.description.map((desc) => (
                              <li>{desc}</li>
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }

                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Technical Skills</CardTitle>
                  <CardDescription>Technologies and tools I work with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-bold mb-2">Frontend</h3>
                      <ul className="space-y-1">
                        {
                          profile?.skills?.frontend?.map((skill) => (
                            <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            {skill}
                          </li>
                          ))
                        }
                        
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Backend</h3>
                      <ul className="space-y-1">
                        {
                          profile?.skills?.backend?.map((skill) => (
                            <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            {skill}
                          </li>
                          ))
                        }
                        
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Other</h3>
                      <ul className="space-y-1">
                        {
                          profile?.skills?.other?.map((skill) => (
                            <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            {skill}
                          </li>
                          ))
                        }
                        
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Education & Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {
                    profile?.education?.map((edu) => (
                      <div>
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{`${edu.institution} | ${edu.period}`}</p>
                      </div>
                    ))
                  }
                  
                  <div>
                    <h3 className="font-bold">Certifications</h3>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      {
                        profile?.certifications?.map((cert) => (
                          <li>{cert}</li>
                        ))
                      }
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-lg font-semibold">{profile?.name}</p>
            <p className="text-muted-foreground">{profile?.title}</p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href={profile?.githubUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={profile?.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={profile?.twitterUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </Button>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">&copy; 2025 M. A. Yahia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
