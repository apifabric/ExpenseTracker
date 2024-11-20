# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class User(Base):
    """description: Users who submit expenses."""
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)



class Expense(Base):
    """description: Individual expenses reported by users."""
    __tablename__ = 'expense'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    amount = Column(Integer, nullable=False)
    description = Column(String(200), nullable=True)
    date = Column(Date, nullable=False)
    category_id = Column(Integer, ForeignKey('category.id'))



class Category(Base):
    """description: Categories for classifying expenses."""
    __tablename__ = 'category'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)



class Receipt(Base):
    """description: Receipts linked to expenses."""
    __tablename__ = 'receipt'

    id = Column(Integer, primary_key=True)
    expense_id = Column(Integer, ForeignKey('expense.id'))
    receipt_date = Column(Date, nullable=False)
    vendor = Column(String(200), nullable=True)
    total_amount = Column(Integer, nullable=False)



class Vendor(Base):
    """description: Vendors associated with receipts."""
    __tablename__ = 'vendor'

    id = Column(Integer, primary_key=True)
    name = Column(String(150), nullable=False)
    contact_info = Column(String(200), nullable=True)



class PaymentMethod(Base):
    """description: Payment methods used for expenses."""
    __tablename__ = 'payment_method'

    id = Column(Integer, primary_key=True)
    type = Column(String(50), nullable=False)
    details = Column(String(200), nullable=True)
    user_id = Column(Integer, ForeignKey('user.id'))



class Invoice(Base):
    """description: Invoices associated with expenses."""
    __tablename__ = 'invoice'

    id = Column(Integer, primary_key=True)
    expense_id = Column(Integer, ForeignKey('expense.id'))
    issued_date = Column(Date, nullable=False)
    due_date = Column(Date, nullable=False)
    amount_due = Column(Integer, nullable=False)
    paid_status = Column(String(50), nullable=False)



class ExpenseReport(Base):
    """description: Reports summarizing user expenses."""
    __tablename__ = 'expense_report'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    report_date = Column(Date, nullable=False)
    total_expense = Column(Integer, nullable=False)



class Department(Base):
    """description: Departments that users can belong to."""
    __tablename__ = 'department'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    manager_id = Column(Integer, ForeignKey('user.id'))



class Policy(Base):
    """description: Policies associated with expenses."""
    __tablename__ = 'policy'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(String(300), nullable=True)
    effective_from = Column(Date, nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'))



class Approver(Base):
    """description: Approvers for expense reports."""
    __tablename__ = 'approver'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    expense_report_id = Column(Integer, ForeignKey('expense_report.id'))
    status = Column(String(100), nullable=False)



class Budget(Base):
    """description: Budgets linked to departments."""
    __tablename__ = 'budget'

    id = Column(Integer, primary_key=True)
    department_id = Column(Integer, ForeignKey('department.id'))
    fiscal_year = Column(Integer, nullable=False)
    allocated_amount = Column(Integer, nullable=False)
    spent_amount = Column(Integer, nullable=False)



# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

# Creating test data for User
test_user_1 = User(id=1, username='jdoe', email='jdoe@example.com')
test_user_2 = User(id=2, username='asmith', email='asmith@example.com')
test_user_3 = User(id=3, username='mjones', email='mjones@example.com')
test_user_4 = User(id=4, username='rwilliams', email='rwilliams@example.com')

# Creating test data for Category
test_category_1 = Category(id=1, name='Travel')
test_category_2 = Category(id=2, name='Office Supplies')
test_category_3 = Category(id=3, name='Meals')
test_category_4 = Category(id=4, name='Utilities')

# Creating test data for Expense
test_expense_1 = Expense(id=1, user_id=1, amount=200, description='Flight booking', date=date(2023, 5, 10), category_id=1)
test_expense_2 = Expense(id=2, user_id=1, amount=50, description='Printing papers', date=date(2023, 4, 15), category_id=2)
test_expense_3 = Expense(id=3, user_id=2, amount=30, description='Lunch with client', date=date(2023, 6, 5), category_id=3)
test_expense_4 = Expense(id=4, user_id=2, amount=120, description='Phone bill', date=date(2023, 7, 20), category_id=4)

# Creating test data for Receipt
test_receipt_1 = Receipt(id=1, expense_id=1, receipt_date=date(2023, 5, 11), vendor='Airline Inc.', total_amount=200)
test_receipt_2 = Receipt(id=2, expense_id=2, receipt_date=date(2023, 4, 16), vendor='Office Depot', total_amount=50)
test_receipt_3 = Receipt(id=3, expense_id=3, receipt_date=date(2023, 6, 6), vendor='Bistro Café', total_amount=30)
test_receipt_4 = Receipt(id=4, expense_id=4, receipt_date=date(2023, 7, 21), vendor='Telecom Corp.', total_amount=120)

# Creating test data for Vendor
test_vendor_1 = Vendor(id=1, name='Airline Inc.', contact_info='info@airline.com')
test_vendor_2 = Vendor(id=2, name='Office Depot', contact_info='contact@officedepot.com')
test_vendor_3 = Vendor(id=3, name='Bistro Café', contact_info='reservations@bistrocafe.com')
test_vendor_4 = Vendor(id=4, name='Telecom Corp.', contact_info='support@telecomcorp.com')

# Creating test data for PaymentMethod
test_payment_method_1 = PaymentMethod(id=1, type='Credit Card', details='Visa ending in 1234', user_id=1)
test_payment_method_2 = PaymentMethod(id=2, type='Bank Transfer', details='Account ending in 7890', user_id=2)
test_payment_method_3 = PaymentMethod(id=3, type='PayPal', details='primary account', user_id=3)
test_payment_method_4 = PaymentMethod(id=4, type='Cash', details='n/a', user_id=4)

# Creating test data for Invoice
test_invoice_1 = Invoice(id=1, expense_id=1, issued_date=date(2023, 5, 12), due_date=date(2023, 5, 22), amount_due=200, paid_status='Paid')
test_invoice_2 = Invoice(id=2, expense_id=2, issued_date=date(2023, 4, 17), due_date=date(2023, 4, 27), amount_due=50, paid_status='Unpaid')
test_invoice_3 = Invoice(id=3, expense_id=3, issued_date=date(2023, 6, 7), due_date=date(2023, 6, 17), amount_due=30, paid_status='Paid')
test_invoice_4 = Invoice(id=4, expense_id=4, issued_date=date(2023, 7, 22), due_date=date(2023, 8, 1), amount_due=120, paid_status='Unpaid')

# Creating test data for ExpenseReport
test_expense_report_1 = ExpenseReport(id=1, user_id=1, report_date=date(2023, 6, 1), total_expense=250)
test_expense_report_2 = ExpenseReport(id=2, user_id=2, report_date=date(2023, 7, 1), total_expense=150)
test_expense_report_3 = ExpenseReport(id=3, user_id=3, report_date=date(2023, 8, 1), total_expense=0)
test_expense_report_4 = ExpenseReport(id=4, user_id=4, report_date=date(2023, 9, 1), total_expense=0)

# Creating test data for Department
test_department_1 = Department(id=1, name='Finance', manager_id=1)
test_department_2 = Department(id=2, name='Marketing', manager_id=2)
test_department_3 = Department(id=3, name='IT', manager_id=3)
test_department_4 = Department(id=4, name='HR', manager_id=4)

# Creating test data for Policy
test_policy_1 = Policy(id=1, name='Travel Policy', description='Policy regarding travel expenses', effective_from=date(2023, 1, 1), user_id=1)
test_policy_2 = Policy(id=2, name='Office Supplies Policy', description='Policy regarding office supplies', effective_from=date(2023, 2, 1), user_id=2)
test_policy_3 = Policy(id=3, name='Food Policy', description='Policy regarding meals during work', effective_from=date(2023, 3, 1), user_id=3)
test_policy_4 = Policy(id=4, name='Utility Policy', description='Policy regarding utility usage', effective_from=date(2023, 4, 1), user_id=4)

# Creating test data for Approver
test_approver_1 = Approver(id=1, user_id=1, expense_report_id=1, status='Approved')
test_approver_2 = Approver(id=2, user_id=2, expense_report_id=2, status='Pending')
test_approver_3 = Approver(id=3, user_id=3, expense_report_id=3, status='Rejected')
test_approver_4 = Approver(id=4, user_id=4, expense_report_id=4, status='Approved')

# Creating test data for Budget
test_budget_1 = Budget(id=1, department_id=1, fiscal_year=2023, allocated_amount=50000, spent_amount=10000)
test_budget_2 = Budget(id=2, department_id=2, fiscal_year=2023, allocated_amount=30000, spent_amount=5000)
test_budget_3 = Budget(id=3, department_id=3, fiscal_year=2023, allocated_amount=40000, spent_amount=0)
test_budget_4 = Budget(id=4, department_id=4, fiscal_year=2023, allocated_amount=20000, spent_amount=2000)


session.add_all([test_user_1, test_user_2, test_user_3, test_user_4, test_category_1, test_category_2, test_category_3, test_category_4, test_expense_1, test_expense_2, test_expense_3, test_expense_4, test_receipt_1, test_receipt_2, test_receipt_3, test_receipt_4, test_vendor_1, test_vendor_2, test_vendor_3, test_vendor_4, test_payment_method_1, test_payment_method_2, test_payment_method_3, test_payment_method_4, test_invoice_1, test_invoice_2, test_invoice_3, test_invoice_4, test_expense_report_1, test_expense_report_2, test_expense_report_3, test_expense_report_4, test_department_1, test_department_2, test_department_3, test_department_4, test_policy_1, test_policy_2, test_policy_3, test_policy_4, test_approver_1, test_approver_2, test_approver_3, test_approver_4, test_budget_1, test_budget_2, test_budget_3, test_budget_4])
session.commit()
