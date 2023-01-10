import { AddressType } from './address';
import { ContactInfoType } from './contactInfo';
import { EducationType } from './education';
import { ExperienceType } from './experience';

export type ResumeType = {
  _createdAt: string;
  _id: 'resume';
  _rev: string;
  _type: 'resume';
  _updatedAt: string;
  address: AddressType;
  contactInfo?: ContactInfoType;
  education: [EducationType & { _key: string }];
  experience: [ExperienceType & { _key: string }];
  name: string;
};
