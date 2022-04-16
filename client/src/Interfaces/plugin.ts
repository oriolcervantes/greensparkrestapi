export default interface Plugin {
  _id: string,
  type: string;
  description: string;
  color: string;
  links: boolean;
  active: boolean;
}