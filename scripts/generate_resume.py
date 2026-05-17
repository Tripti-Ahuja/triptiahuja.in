"""Generate resume.pdf from site profile content."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATHS = [ROOT / "public" / "resume.pdf", ROOT / "resume.pdf"]

ROLE_TITLE = "Product Module Lead - Systems"

SUMMARY = (
    f"{ROLE_TITLE} with 9+ years of experience building scalable analytics platforms, "
    "data pipelines, and business intelligence solutions using Python, SQL, and LLMs. "
    "Certified Professional Scrum Product Owner (PSPO I), AWS Cloud Practitioner, and Microsoft Azure "
    "Fundamentals (AZ-900), with hands-on product ownership and cloud delivery experience. Proven track "
    "record delivering enterprise data architectures on AWS and Azure, implementing advanced analytics "
    "and interactive visualizations with Databricks, Tableau, and Power BI to evaluate critical business "
    "metrics across diverse industries."
)

EXPERIENCES = [
    {
        "company": "Mphasis Limited",
        "location": "India",
        "title": ROLE_TITLE,
        "duration": "Jan 2023 – Present",
        "tech": "Python, Azure Data Factory, AWS, SQL, Tableau",
        "bullets": [
            "Led multiple server migration projects from on-premises to AWS cloud, including application re-architecture, data migration, and infrastructure optimization reducing operational costs by 30%.",
            "Implement monitoring and alerting systems for cloud resources, enhancing visibility and enabling rapid issue resolution while maintaining 99.9% uptime.",
            "Build automation solutions using Python for full-stack application development and Tableau workflow optimization, leveraging REST APIs to streamline content publishing, administrative processes, and operational tasks across cloud platforms.",
            "Deploy cloud infrastructure on AWS, managing server configurations, security groups, and auto-scaling policies for high-availability systems.",
            "Develop ETL pipelines using Azure Data Factory and AWS for automated data ingestion, transformation, and loading across multi-cloud environments.",
            "Build end-to-end analytics solutions using Databricks for large-scale data processing and create interactive dashboards in Tableau and Power BI, translating complex datasets into actionable business insights for stakeholders.",
        ],
    },
    {
        "company": "Ultimate Kronos Group",
        "location": "India",
        "title": "Senior Analyst",
        "duration": "Dec 2019 – Oct 2022",
        "tech": "Tableau, Power BI, SQL (Azure SQL), Python, Azure Data Factory",
        "bullets": [
            "Developed 20+ Tableau and Power BI dashboards tracking finance, operations, and workforce analytics KPIs, supporting data-driven decisions for senior leadership.",
            "Optimized complex SQL queries and stored procedures in Azure SQL, reducing report generation time by 40% and improving data pipeline efficiency.",
            "Implemented comprehensive data validation and reconciliation processes across multiple source systems, ensuring 99.9% data accuracy in enterprise reporting.",
            "Served as subject matter expert (SME) for BI reporting, providing technical guidance, conducting user training sessions, and managing enhancement requests.",
        ],
    },
    {
        "company": "Accenture Solutions Pvt Ltd",
        "location": "India",
        "title": "Business Analyst",
        "duration": "Jan 2017 – Dec 2019",
        "tech": "Excel, VBA, SQL, Power BI, SharePoint",
        "bullets": [
            "Gathered and documented detailed business requirements for analytics solutions, creating functional specifications and process flow diagrams for development teams.",
            "Built automated MIS reporting systems using Advanced Excel, VBA macros, and SQL queries, reducing manual reporting effort by 60%.",
            "Facilitated stakeholder workshops and requirement elicitation sessions, ensuring alignment between business needs and technical solutions.",
            "Prepared executive dashboards and presentations for C-level stakeholders, translating complex data insights into actionable business recommendations.",
        ],
    },
]

CERTIFICATIONS = [
    "Professional Scrum Product Owner I (PSPO I) — Scrum.org",
    "AWS Certified Cloud Practitioner",
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
]

EDUCATION = [
    {
        "school": "Symbiosis School of Distance Learning",
        "location": "Pune, India",
        "degree": "PG Diploma in Business Administration",
        "duration": "Feb 2017 – Feb 2019",
    },
    {
        "school": "Mahatma Gandhi University",
        "location": "India",
        "degree": "Bachelor of Business Administration",
        "duration": "Jul 2013 – Jul 2016",
    },
]


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=18,
            spaceAfter=4,
            textColor=colors.HexColor("#0f172a"),
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#334155"),
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            spaceBefore=7,
            spaceAfter=4,
            textColor=colors.HexColor("#0f172a"),
            borderPadding=0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=11.5,
            alignment=TA_LEFT,
            textColor=colors.HexColor("#1e293b"),
        ),
        "role_title": ParagraphStyle(
            "RoleTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=11,
            spaceBefore=4,
            textColor=colors.HexColor("#0f172a"),
        ),
        "role_meta": ParagraphStyle(
            "RoleMeta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.5,
            leading=10.5,
            textColor=colors.HexColor("#475569"),
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=10.5,
            leftIndent=12,
            bulletIndent=0,
            textColor=colors.HexColor("#1e293b"),
        ),
        "cert": ParagraphStyle(
            "Cert",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            leftIndent=8,
            textColor=colors.HexColor("#1e293b"),
        ),
    }


def bullet_list(items, style):
    return ListFlowable(
        [
            ListItem(Paragraph(text, style), leftIndent=0)
            for text in items
        ],
        bulletType="bullet",
        start="•",
        leftIndent=14,
        bulletFontName="Helvetica",
        bulletFontSize=9,
    )


def build_story(styles):
    story = [
        Paragraph("Tripti Ahuja", styles["name"]),
        Paragraph(
            "LinkedIn: linkedin.com/in/tripti-ahuja-a88002122 &nbsp;|&nbsp; "
            "Phone: +91 9654845440 &nbsp;|&nbsp; Email: triptiahuja27@gmail.com<br/>"
            "Portfolio: triptiahuja.in",
            styles["contact"],
        ),
        Paragraph("Professional Summary", styles["section"]),
        Paragraph(SUMMARY, styles["body"]),
        Paragraph("Experience", styles["section"]),
    ]

    for role in EXPERIENCES:
        story.append(
            Paragraph(
                f'{role["company"]} &nbsp;·&nbsp; {role["location"]}',
                styles["role_title"],
            )
        )
        story.append(
            Paragraph(
                f'{role["title"]} &nbsp;&nbsp; {role["duration"]}',
                styles["role_meta"],
            )
        )
        story.append(
            Paragraph(f'Tech stack: {role["tech"]}', styles["role_meta"]),
        )
        story.append(bullet_list(role["bullets"], styles["bullet"]))

    story.append(Paragraph("Certifications", styles["section"]))
    story.append(bullet_list(CERTIFICATIONS, styles["cert"]))

    story.append(Paragraph("Education", styles["section"]))
    for edu in EDUCATION:
        story.append(
            Paragraph(
                f'{edu["school"]} &nbsp;·&nbsp; {edu["location"]}',
                styles["role_title"],
            )
        )
        story.append(
            Paragraph(
                f'{edu["degree"]} &nbsp;&nbsp; {edu["duration"]}',
                styles["role_meta"],
            )
        )

    return story


def generate():
    for path in OUTPUT_PATHS:
        path.parent.mkdir(parents=True, exist_ok=True)
        doc = SimpleDocTemplate(
            str(path),
            pagesize=letter,
            leftMargin=0.6 * inch,
            rightMargin=0.6 * inch,
            topMargin=0.5 * inch,
            bottomMargin=0.5 * inch,
            title="Tripti Ahuja - Resume",
            author="Tripti Ahuja",
        )
        styles = build_styles()
        doc.build(build_story(styles))
        print(f"Wrote {path}")


if __name__ == "__main__":
    generate()
