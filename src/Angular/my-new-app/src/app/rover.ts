export class Rover {
    id: number;
    name: string;
    datetype: string;
    cameras: string[];
    max_sol: string;
    max_date: string;
    landing_date: string;
}
export const rovers: Rover[] = [
    { id: 1, name: 'Curiosity',
    datetype: '', cameras: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    max_sol: '2155', max_date: '2018-08-29', landing_date: '2012-08-06' },
    { id: 2, name: 'Opportunity',
     datetype: '', cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
     max_sol: '5111', max_date: '2018-06-11', landing_date: '2004-01-25' },
    { id: 3, name: 'Spirit',
     datetype: '', cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
      max_sol: '2208', max_date: '2010-03-21', landing_date: '2004-01-04' },
];
