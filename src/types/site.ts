export type TLinks = {
	github: string;
	linkedin: string;
	mail: string;
};

export type TWorkExperience = {
	title: string;
	company: string;
	link: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	tags: string[];
};

export type TEducation = {
	school: string;
	location: string;
	degree: string;
	fieldOfStudy?: string;
	description?: string;
	startDate: string;
	link: string;
	endDate?: string;
};

export type TSiteConfig = {
	name: string;
	description: string;
	links: TLinks;
	languages: string[];
	product: string[];
	frontend: string[];
	backend: string[];
	appliedAI: string[];
	cloudTools: string[];
	experience: TWorkExperience[];
	education: TEducation[];
};
