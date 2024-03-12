import prismaClient from "../../../prisma/connect.js";
import { AppError } from "../../../errors/app.error.js";

class DeleteChatHistoryService {
  async execute({ userSession }) {
    const isChatSession = await prismaClient.chatSession.findFirst({
      where: {
        userId: userSession,
      },
    });

    const isChatHistory = await prismaClient.chatbotMessages.findFirst({
      where: {
        chatSessionId: isChatSession.id,
      },
    });

    if (!isChatHistory) {
      throw new AppError("Nenhum histórico de conversa foi encontrado.", 404);
    }

    const deleteChatHistory = await prismaClient.chatbotMessages.deleteMany({
      where: {
        chatSessionId: isChatSession.id,
      },
    });

    return { deleteChatHistory };
  }
}

export { DeleteChatHistoryService };