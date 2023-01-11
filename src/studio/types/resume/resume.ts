import { AddressType } from './address';
import { ContactInfoType } from './contactInfo';
import { EducationType } from './education';
import { ExperienceType } from './experience';
import { SkillsSectionType } from './skillsSection';

export type ResumeType = {
  _createdAt?: string;
  _id?: 'resume';
  _rev?: string;
  _type: 'resume';
  _updatedAt: string;
  address: AddressType;
  contactInfo?: ContactInfoType;
  education: EducationType[];
  experience: ExperienceType[];
  name: string;
  skills?: SkillsSectionType[];
};
