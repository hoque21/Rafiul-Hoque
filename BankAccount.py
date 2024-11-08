from abc import ABC, abstractmethod

# Base class representing a Bank Account
class BankAccount(ABC):
    def __init__(self, account_number, balance=0):
        self._account_number = account_number  # Protected attribute
        self._balance = balance  # Private attribute to encapsulate balance

    # Method to get the current balance
    def get_balance(self):
        return self._balance

    # Method to deposit an amount into the account
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited ${amount}. New balance: ${self._balance}")
        else:
            print("Deposit amount must be positive.")

    # Abstract method to be implemented in subclasses for withdraw operation
    @abstractmethod
    def withdraw(self, amount):
        pass

# SavingsAccount class inheriting from BankAccount
class SavingsAccount(BankAccount):
    def __init__(self, account_number, balance=0):
        super().__init__(account_number, balance)
        self._withdrawal_limit = 3  # Limit of withdrawals
        self._withdrawal_count = 0  # Track the number of withdrawals

    # Overridden withdraw method with withdrawal limit
    def withdraw(self, amount):
        if self._withdrawal_count >= self._withdrawal_limit:
            print("Withdrawal limit reached.")
            return

        if 0 < amount <= self._balance:
            self._balance -= amount
            self._withdrawal_count += 1
            print(f"Withdrew ${amount}. New balance: ${self._balance}")
        else:
            print("Insufficient funds or invalid amount.")

# CheckingAccount class inheriting from BankAccount
class CheckingAccount(BankAccount):
    def __init__(self, account_number, balance=0, overdraft_limit=500):
        super().__init__(account_number, balance)
        self._overdraft_limit = overdraft_limit  # Overdraft limit for checking accounts

    # Overridden withdraw method with overdraft feature
    def withdraw(self, amount):
        if amount <= 0:
            print("Invalid amount.")
            return

        # Allow overdraft up to the limit
        if self._balance + self._overdraft_limit >= amount:
            self._balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self._balance}")
        else:
            print("Exceeded overdraft limit.")

# Customer class representing a bank customer
class Customer:
    def __init__(self, name, customer_id):
        self.name = name
        self.customer_id = customer_id
        self.accounts = {}  # Dictionary to store accounts with account number as key

    # Method to add a new account for the customer
    def add_account(self, account):
        self.accounts[account._account_number] = account

    # Method to access an account by its number
    def get_account(self, account_number):
        return self.accounts.get(account_number, None)

# Example usage
# Create a customer
customer1 = Customer("John Doe", "CUST123")

# Create accounts
savings_account = SavingsAccount("SA123", 1000)
checking_account = CheckingAccount("CA123", 500)

# Add accounts to the customer
customer1.add_account(savings_account)
customer1.add_account(checking_account)

# Perform some operations
savings_account.deposit(500)
savings_account.withdraw(200)
savings_account.withdraw(200)
savings_account.withdraw(200)  # This will hit the withdrawal limit

checking_account.deposit(300)
checking_account.withdraw(1200)  # This will use overdraft
