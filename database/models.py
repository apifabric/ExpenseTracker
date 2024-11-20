# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 20, 2024 03:56:39
# Database: sqlite:////tmp/tmp.a0YlRJOKHx-01JD3VCRDTG67VK9E36CKMPZCR/ExpenseTracker/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Category(SAFRSBaseX, Base):
    """
    description: Categories for classifying expenses.
    """
    __tablename__ = 'category'
    _s_collection_name = 'Category'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ExpenseList : Mapped[List["Expense"]] = relationship(back_populates="category")



class User(SAFRSBaseX, Base):
    """
    description: Users who submit expenses.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    DepartmentList : Mapped[List["Department"]] = relationship(back_populates="manager")
    ExpenseList : Mapped[List["Expense"]] = relationship(back_populates="user")
    ExpenseReportList : Mapped[List["ExpenseReport"]] = relationship(back_populates="user")
    PaymentMethodList : Mapped[List["PaymentMethod"]] = relationship(back_populates="user")
    PolicyList : Mapped[List["Policy"]] = relationship(back_populates="user")
    ApproverList : Mapped[List["Approver"]] = relationship(back_populates="user")



class Vendor(SAFRSBaseX, Base):
    """
    description: Vendors associated with receipts.
    """
    __tablename__ = 'vendor'
    _s_collection_name = 'Vendor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(150), nullable=False)
    contact_info = Column(String(200))

    # parent relationships (access parent)

    # child relationships (access children)



class Department(SAFRSBaseX, Base):
    """
    description: Departments that users can belong to.
    """
    __tablename__ = 'department'
    _s_collection_name = 'Department'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    manager_id = Column(ForeignKey('user.id'))

    # parent relationships (access parent)
    manager : Mapped["User"] = relationship(back_populates=("DepartmentList"))

    # child relationships (access children)
    BudgetList : Mapped[List["Budget"]] = relationship(back_populates="department")



class Expense(SAFRSBaseX, Base):
    """
    description: Individual expenses reported by users.
    """
    __tablename__ = 'expense'
    _s_collection_name = 'Expense'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    amount = Column(Integer, nullable=False)
    description = Column(String(200))
    date = Column(Date, nullable=False)
    category_id = Column(ForeignKey('category.id'))

    # parent relationships (access parent)
    category : Mapped["Category"] = relationship(back_populates=("ExpenseList"))
    user : Mapped["User"] = relationship(back_populates=("ExpenseList"))

    # child relationships (access children)
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="expense")
    ReceiptList : Mapped[List["Receipt"]] = relationship(back_populates="expense")



class ExpenseReport(SAFRSBaseX, Base):
    """
    description: Reports summarizing user expenses.
    """
    __tablename__ = 'expense_report'
    _s_collection_name = 'ExpenseReport'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    report_date = Column(Date, nullable=False)
    total_expense = Column(Integer, nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ExpenseReportList"))

    # child relationships (access children)
    ApproverList : Mapped[List["Approver"]] = relationship(back_populates="expense_report")



class PaymentMethod(SAFRSBaseX, Base):
    """
    description: Payment methods used for expenses.
    """
    __tablename__ = 'payment_method'
    _s_collection_name = 'PaymentMethod'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String(50), nullable=False)
    details = Column(String(200))
    user_id = Column(ForeignKey('user.id'))

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("PaymentMethodList"))

    # child relationships (access children)



class Policy(SAFRSBaseX, Base):
    """
    description: Policies associated with expenses.
    """
    __tablename__ = 'policy'
    _s_collection_name = 'Policy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(String(300))
    effective_from = Column(Date, nullable=False)
    user_id = Column(ForeignKey('user.id'))

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("PolicyList"))

    # child relationships (access children)



class Approver(SAFRSBaseX, Base):
    """
    description: Approvers for expense reports.
    """
    __tablename__ = 'approver'
    _s_collection_name = 'Approver'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    expense_report_id = Column(ForeignKey('expense_report.id'))
    status = Column(String(100), nullable=False)

    # parent relationships (access parent)
    expense_report : Mapped["ExpenseReport"] = relationship(back_populates=("ApproverList"))
    user : Mapped["User"] = relationship(back_populates=("ApproverList"))

    # child relationships (access children)



class Budget(SAFRSBaseX, Base):
    """
    description: Budgets linked to departments.
    """
    __tablename__ = 'budget'
    _s_collection_name = 'Budget'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    department_id = Column(ForeignKey('department.id'))
    fiscal_year = Column(Integer, nullable=False)
    allocated_amount = Column(Integer, nullable=False)
    spent_amount = Column(Integer, nullable=False)

    # parent relationships (access parent)
    department : Mapped["Department"] = relationship(back_populates=("BudgetList"))

    # child relationships (access children)



class Invoice(SAFRSBaseX, Base):
    """
    description: Invoices associated with expenses.
    """
    __tablename__ = 'invoice'
    _s_collection_name = 'Invoice'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    expense_id = Column(ForeignKey('expense.id'))
    issued_date = Column(Date, nullable=False)
    due_date = Column(Date, nullable=False)
    amount_due = Column(Integer, nullable=False)
    paid_status = Column(String(50), nullable=False)

    # parent relationships (access parent)
    expense : Mapped["Expense"] = relationship(back_populates=("InvoiceList"))

    # child relationships (access children)



class Receipt(SAFRSBaseX, Base):
    """
    description: Receipts linked to expenses.
    """
    __tablename__ = 'receipt'
    _s_collection_name = 'Receipt'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    expense_id = Column(ForeignKey('expense.id'))
    receipt_date = Column(Date, nullable=False)
    vendor = Column(String(200))
    total_amount = Column(Integer, nullable=False)

    # parent relationships (access parent)
    expense : Mapped["Expense"] = relationship(back_populates=("ReceiptList"))

    # child relationships (access children)
