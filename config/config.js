export const Config = {
   supportServer: "YOUR_SERVER",
   botDescription: "YOUR_BOT_DESCRIPTION",
   inviteBot: "LINK_TO_INVITE_BOT",

   examplesCommands: [
      {
         _id: 0,
         name: "help",
         description: "Displays a help panel ",
         use: "/help",
      },
      {
         _id: 1,
         name: "premium",
         description: "Shows you the premium benefits",
         use: "/premium",
      },
      {
         _id: 2,
         name: "setmodlogs",
         description: "Define the channel you want to use for Master logs",
         use: "/setmodlogs [channel]",
      },
      {
         _id: 3,
         name: "ban",
         description: "Ban a member from the guild",
         use: "/ban [user] <reason>",
      },
      {
         _id: 4,
         name: "unban",
         description: "Unban a member from the guild",
         use: "/unban [userID]",
      },
   ],

   backend_API_KEY: "YOUR_COMMAND_API", // I can create u a backend API key for automatically get all your commands from your bot
};
