
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, LinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoUrl,
  codeUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="gap-1" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-4 w-4" />
            Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" className="gap-1" asChild>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Folder className="h-4 w-4" />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
