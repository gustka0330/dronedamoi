import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '윤현삼',
    alternateName: 'Yoon Hyun Sam',
    jobTitle: 'Elementary School Teacher / Student Drone Education Specialist',
    description: '11년차 현직 초등학교 교사이자 학생드론교육 전문가. 2023 FIDA World Championship Class 20 세계대회 우승팀 코치.',
    url: siteConfig.url,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'DRONEDAMOI DRONE SCHOOL',
      url: siteConfig.url,
    },
    knowsAbout: [
      '학생드론교육',
      '드론코딩',
      '드론축구',
      '항공촬영',
      '교원연수',
      '학교자율시간',
      '2022 개정 교육과정',
    ],
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'DRONEDAMOI DRONE SCHOOL',
    alternateName: '드론다모이 드론스쿨',
    description: siteConfig.coreMessage,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/profile-main.jpg`,
    founder: {
      '@type': 'Person',
      name: '윤현삼',
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
