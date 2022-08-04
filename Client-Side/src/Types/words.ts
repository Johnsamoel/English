export interface AnswerInterface {
  id: number;
  title: string;
}
export interface WordInterface {
  id: number;
  word: string;
  pos: string;
}

export interface WordContainerProps {
    children: React.ReactNode;
    bgc: String;
    counter:number;
    word:string;

}


export interface ButtonProps {
  children: React.ReactNode ;
  bgColor?: string;
  action?: any
}

export interface ExampleContainerProps {
  bgc: string,
  Example: string
}