export default interface Plugin {
  id: string,
  type: string;
  description: string;
  colour: string;
  links: boolean;
  active: boolean;
}