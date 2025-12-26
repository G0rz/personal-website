import ResumeCard from "@/components/home/ResumeCard";
import ExternalLinksCard from "@/components/home/ExternalLinksCard";
import AboutMeCard from "@/components/home/AboutMeCard"
import TechStackCard from "@/components/home/TechStackCard"
import JobHistoryCard from "@/components/home/JobHistoryCard";
import EducationCard from "@/components/home/EducationCard";
import LatestProjectCard from "@/components/home/LatestProjectCard";
import ContactCard from "@/components/home/ContactCard";
import OtherProjectsCard from "@/components/home/OtherProjectsCard";
import AttachmentsCard from "@/components/home/AttachmentsCard";

export default function Home() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 p-4">
            <ResumeCard/>
            <ExternalLinksCard/>
            <TechStackCard/>
            <AboutMeCard/>
            <JobHistoryCard/>
            <EducationCard/>
            <AttachmentsCard/>
            <ContactCard/>
            <LatestProjectCard/>
            <OtherProjectsCard/>
        </div>
    );
}