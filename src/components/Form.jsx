"use client";

import axios from 'axios';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import MonthYearPicker from '@/components/ui/MonthYearPicker';
export default function Form() {
  const [showAlert, setShowAlert] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    bio:"",
    linkedin: "",
    github: "",
  });
  const [education, setEducation] = useState([
    {
      deg: "",
      field: "",
      inst: "",
      start: "",
      end: "",
      grade: "",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      thumbnail: null,
      name: "",
      link: "",
      description: "",
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      company: "",
      role: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Personal Details Handler
  const handlePersonalDetailsChange = (field, value) => {
    setPersonalDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Education Handlers
  const handleEduAdd = (e) => {
    e.preventDefault();
    setEducation((prev) => [
      ...prev,
      {
        deg: "",
        field: "",
        inst: "",
        start: "",
        end: "",
        grade: "",
      },
    ]);
  };
  const handleEduRemove = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };
  const handleEduChange = (index, field, value) => {
    setEducation((prev) => 
      prev.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    );
  };

  // Projects Handlers
  const handleProjectAdd = (e) => {
    e.preventDefault();
    setProjects((prev) => [
      ...prev,
      {
        thumbnail: null,
        name: "",
        link: "",
        description: "",
      },
    ]);
  };
  const handleProjectRemove = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };
  const handleProjectChange = (index, field, value) => {
    setProjects((prev) => 
      prev.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    );
  };

  // Experiences Handlers
  const handleExperienceAdd = (e) => {
    e.preventDefault();
    setExperiences((prev) => [
      ...prev,
      {
        company: "",
        role: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };
  const handleExperienceRemove = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };
  const handleExperienceChange = (index, field, value) => {
    setExperiences((prev) => 
      prev.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    );
  };

  // Skills Handlers
  const handleSkillAdd = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== "") {
      setSkills((prev) => [...prev, newSkill.trim()]);
      setNewSkill("");
    }
  };
  const handleSkillDelete = (index) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
  };
  // Handle Download
  const handleDownload = async () => {
    try {
      const response = await axios.get("/api/download", {
        responseType: "blob", // Important for binary data
      });

      // Extract filename from content-disposition header
      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !personalDetails.name.trim() ||
      !personalDetails.email.trim() ||
      !personalDetails.linkedin.trim() ||
      !personalDetails.github.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Validate projects
    if (projects.some(project => !project.name.trim() || !project.link.trim())) {
      alert("Please fill in all required fields in projects.");
      return;
    }

    // Validate education
    if (education.some(edu => !edu.deg.trim() || !edu.field.trim() || !edu.inst.trim() || !edu.start.trim() || !edu.end.trim())) {
      alert("Please fill in all required fields in Education.");
      return;
    }
    
    // Validate experiences
    if (experiences.some(exp => !exp.company.trim() || !exp.role.trim())) {
      alert("Please fill in all required fields in experiences.");
      return;
    }
    
    const url = "https://api.cloudinary.com/v1_1/dgvfqf00g/image/upload";
    
    // Upload project thumbnails to Cloudinary
    for (let project of projects) {
      if (project.thumbnail) {
        const formData = new FormData();
        formData.append('file', project.thumbnail);
        formData.append('upload_preset', 'harshit_quickcv_project');
        
        try {
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          project.thumbnail = data.public_id; // Save public_id to project
        } catch (error) {
          console.error("Error uploading image:", error);
          alert("There was an error uploading the image.");
          return;
        }
      } else {
        project.thumbnail = "Project/ejowpggabfmioqimtx7r";
      }
    }
    
    // Log and save portfolio data
    const obj = {
      personalDetails,
      education,
      projects,
      experiences,
      skills,
    };
    await handleDownload();
    const jsonData = JSON.stringify(obj, null, 2);
    const encodedJsonData = encodeURIComponent(jsonData);
    
    // Navigate to the new page with JSON data
    window.open(`/json-display?jsonData=${encodedJsonData}`, '_blank');
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  
  return (
    <div className="dark bg-black text-white p-[5%]">
      <div>
        {showAlert && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[30%] bg-green-100 border border-green-500 text-green-900 py-2 px-4 text-center shadow-md rounded-xl">
            Success! Details are saved.
          </div>
        )}
      </div>
      <Card className="w-full max-w-4xl bg-black text-white">
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
          <CardDescription>
            Fill out the form to showcase your skills and experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-8">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name*
                  </Label>
                  <Input
                    id="name"
                    value={personalDetails.name}
                    onChange={(e) =>
                      handlePersonalDetailsChange("name", e.target.value)
                    }
                    className="bg-black text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={personalDetails.email}
                    onChange={(e) =>
                      handlePersonalDetailsChange("email", e.target.value)
                    }
                    className="bg-black text-white"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-white">
                    LinkedIn*
                  </Label>
                  <Input
                    id="linkedin"
                    value={personalDetails.linkedin}
                    onChange={(e) =>
                      handlePersonalDetailsChange("linkedin", e.target.value)
                    }
                    className="bg-black text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-white">
                    GitHub*
                  </Label>
                  <Input
                    id="github"
                    value={personalDetails.github}
                    onChange={(e) =>
                      handlePersonalDetailsChange("github", e.target.value)
                    }
                    className="bg-black text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Bio (Example-A Front End Developer) (Optional)
                  </Label>
                  <Input
                    id="bio"
                    value={personalDetails.bio}
                    onChange={(e) =>
                      handlePersonalDetailsChange("bio", e.target.value)
                    }
                    className="bg-black text-white"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Education</h3>
                <Button onClick={(e) => handleEduAdd(e)}>Add Education</Button>
              </div>
              <div className="grid gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-deg-${index}`}
                          className="text-white"
                        >
                          Degree*
                        </Label>
                        <Input
                          id={`edu-deg-${index}`}
                          value={edu.deg}
                          onChange={(e) =>
                            handleEduChange(index, "deg", e.target.value)
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-field-${index}`}
                          className="text-white"
                        >
                          Field of Study*
                        </Label>
                        <Input
                          id={`edu-field-${index}`}
                          value={edu.field}
                          onChange={(e) =>
                            handleEduChange(index, "field", e.target.value)
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-inst-${index}`}
                          className="text-white"
                        >
                          Institution*
                        </Label>
                        <Input
                          id={`edu-inst-${index}`}
                          value={edu.inst}
                          onChange={(e) =>
                            handleEduChange(index, "inst", e.target.value)
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-grade-${index}`}
                          className="text-white"
                        >
                          Grade
                        </Label>
                        <Input
                          id={`edu-grade-${index}`}
                          value={edu.grade}
                          onChange={(e) =>
                            handleEduChange(index, "grade", e.target.value)
                          }
                          className="bg-black text-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-start-${index}`}
                          className="text-white"
                        >
                          Start*
                        </Label>
                        <Input type="number" placeholder="YYYY" min="1900" max="2099" className='bg-black text-white' onChange={(e) =>
                            handleEduChange(index, "start", e.target.value)
                          }/>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`edu-end-${index}`}
                          className="text-white"
                        >
                          End Date*
                        </Label><br/>
                        <Input type="number" placeholder="YYYY" min="1900" max="2099" className='bg-black text-white' onChange={(e) =>
                            handleEduChange(index, "end", e.target.value)
                          }/>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => handleEduRemove(index)}>
                        Remove Education
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Projects</h3>
                <Button onClick={(e) => handleProjectAdd(e)}>
                  Add Project
                </Button>
              </div>
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor={`project-thumbnail-${index}`}
                          className="text-white"
                        >
                          Thumbnail
                        </Label>
                        <Input
                          id={`project-thumbnail-${index}`}
                          type="file"
                          onChange={(e) =>
                            handleProjectChange(
                              index,
                              "thumbnail",
                              e.target.files[0]
                            )
                          }
                          className="bg-black text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`project-name-${index}`}
                          className="text-white"
                        >
                          Name*
                        </Label>
                        <Input
                          id={`project-name-${index}`}
                          value={project.name}
                          onChange={(e) =>
                            handleProjectChange(index, "name", e.target.value)
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`project-link-${index}`}
                          className="text-white"
                        >
                          Link*
                        </Label>
                        <Input
                          id={`project-link-${index}`}
                          value={project.link}
                          onChange={(e) =>
                            handleProjectChange(index, "link", e.target.value)
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor={`project-description-${index}`}
                        className="text-white"
                      >
                        Description
                      </Label>
                      <Textarea
                        id={`project-description-${index}`}
                        value={project.description}
                        onChange={(e) =>
                          handleProjectChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        rows={3}
                        className="bg-black text-white"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => handleProjectRemove(index)}>
                        Remove Project
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Experience</h3>
                <Button onClick={(e) => handleExperienceAdd(e)}>
                  Add Experience
                </Button>
              </div>
              <div className="grid gap-6">
                {experiences.map((experience, index) => (
                  <div key={index} className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor={`experience-company-${index}`}
                          className="text-white"
                        >
                          Company*
                        </Label>
                        <Input
                          id={`experience-company-${index}`}
                          value={experience.company}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "company",
                              e.target.value
                            )
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`experience-role-${index}`}
                          className="text-white"
                        >
                          Role*
                        </Label>
                        <Input
                          id={`experience-role-${index}`}
                          value={experience.role}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "role",
                              e.target.value
                            )
                          }
                          className="bg-black text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor={`experience-start-date-${index}`}
                          className="text-white"
                        >
                          Start Date*
                        </Label><br/>
                        <MonthYearPicker selectedDate={experience.startDate} handleDateChange={(date) => handleExperienceChange(index, 'startDate', date) } />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor={`experience-end-date-${index}`}
                          className="text-white"
                        >
                          End Date*
                        </Label><br/>
                        <MonthYearPicker selectedDate={experience.endDate} handleDateChange={(date) => handleExperienceChange(index, 'endDate', date) } />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor={`experience-description-${index}`}
                        className="text-white"
                      >
                        Description
                      </Label>
                      <Textarea
                        id={`experience-description-${index}`}
                        value={experience.description}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        rows={3}
                        className="bg-black text-white"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => handleExperienceRemove(index)}>
                        Remove Experience
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Skills</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="flex items-center justify-between bg-black text-white pl-[5%]"
                  >
                    <div>{skill}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSkillDelete(index)}
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </Card>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSkillAdd();
                    }
                  }}
                  placeholder="Add a new skill"
                  className="bg-black text-white"
                />
                <Button onClick={(e) => handleSkillAdd(e)}>Add</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="bg-black text-white border border-primary hover:text-black"
            onClick={handleSubmit}
          >
            Save Portfolio
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function CalendarDaysIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
