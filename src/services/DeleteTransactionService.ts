import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionToDelete = await transactionsRepository.findOne({ id });

    if (!transactionToDelete) {
      throw new AppError('This transaction does not exist to delete');
    }

    await transactionsRepository.remove(transactionToDelete);
  }
}

export default DeleteTransactionService;
