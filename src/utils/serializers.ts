import { Project } from "../types";

export const rawProjectSerializer = (rawData: any): Project => {
  return {
    name: rawData["name"],
    owner: rawData["owner_address"],
    address: rawData["address"],
    logo: rawData["image"],
    ticker: rawData["ticker"],
    category: rawData["category"],
    websiteUrl: rawData["website"],
    twitterUrl: rawData["twitter_url"],
    discordUrl: rawData["discord_url"],
    telegramUrl: rawData["telegram_url"],
    youtubeUrl: rawData["youtube_url"],
    bio: rawData["bio"],
    coverImage: rawData["cover_image"],
    royalty: rawData["royalty"],
    isVerified: rawData["is_verified"],
  };
};
