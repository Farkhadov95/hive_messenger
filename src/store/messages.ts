// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";
// import { MessageType } from "../types/message";

// interface UserStore {
//   allMessages: MessageType[];
//   setAllMessages: (allMessages: MessageType[]) => void;
// }

// export const useMessageStore = create<UserStore>()(
//   persist(
//     (set) => ({
//       allMessages: [],
//       setAllMessages: (allMessages: MessageType[]) => set({ allMessages }),
//     }),
//     {
//       name: "messages-storage",
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );
