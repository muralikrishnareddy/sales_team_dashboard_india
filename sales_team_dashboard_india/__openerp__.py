{
    'name': 'Sales Team Invoice Amount in India Format in Kanban View',
    'category': 'sale',
    'description': """
This module displays Sales Team Invoice Target and Invoiced this Month with Crores/Lakhs/Thousnads instead of Millions in Kanban View.
""",
    'author': 'Murali Krishna Reddy',
    'website': 'http://www.credativ.in',
    'sequence':0,
    'version': '1.0',
    'depends': ['base','sales_team'],
    'images':['images/sales1.png'],
    'data' : [        
        'views/web_progress_ind.xml',
    ],
    'qweb' : [
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}


