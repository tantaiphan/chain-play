export class GetGamesApiResult {
  items: GameVM[];
  totalItems: number;

  constructor() {
    this.items = [];
    this.totalItems = 0;
  }
}

export class GameVM {
  Code: string;
  Name: string;
  ImageUrl: string;
  Symbol: string;
  BlockChains: BlockchainVM[];
  Genres: GenreVM[];
  Platforms: PlatformVM[];
  Price: number;

  constructor() {
    this.Code = "";
    this.Name = "";
    this.ImageUrl = "";
    this.Symbol = "";
    this.BlockChains = [];
    this.Genres = [];
    this.Platforms = [];
    this.Price = 0;
  }
}

export class BlockchainVM {
  Code: string;
  Name: string;
  ExtendValue: string | null;

  constructor() {
    this.Code = "";
    this.Name = "";
    this.ExtendValue = "";
  }
}

export class GenreVM {
  Code: string;
  Name: string;

  constructor() {
    this.Code = "";
    this.Name = "";
  }
}
export class PlatformVM {
  Code: string;
  Name: string;

  constructor() {
    this.Code = "";
    this.Name = "";
  }
}
