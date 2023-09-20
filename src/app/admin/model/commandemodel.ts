export class commande
{
  clientId?:number;
  date?:Date;
  modeles?:modeleQuantite[];
  avance?:string;
  remise?:string;
  valide:boolean=false;
  livre:boolean=false;
  total?:number;
}

export class modeleQuantite
{
  modeleId?:number;
  quantite?:number;
  totalModele?:number;
}
