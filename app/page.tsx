'use client'

import { useEffect, useRef } from 'react'
import {
  BarChart3,
  Database,
  GitFork,
  Network,
  LucideRadioTower,
  Settings2,
  Target,
  ArrowUpRight,
  CircleHelp,
} from 'lucide-react'

const overview = [
  { title: 'Purpose', icon: Target, tone: 'teal', body: 'A dashboard that analyzes customer churn behavior to help identify at-risk customers before they leave.' },
  { title: 'Data Source', icon: Database, tone: 'teal', body: 'Based on 7,000+ real telecom customer records from the IBM Telco Customer Churn dataset.' },
  { title: 'Key Questions Answered', icon: CircleHelp, tone: 'orange', body: 'Why do customers churn? Which customer segments are highest risk? Which specific customers need attention now?' },
  { title: "What's Inside", icon: Settings2, tone: 'orange', body: 'Churn drivers, K-Means customer segmentation, a Logistic Regression model with 84% ROC-AUC, and an at-risk customer watchlist.' },
]

const stats = [
  ['Churn Rate', '26%'],
  ['Total Customers', '7,021'],
  ['Avg Monthly Charges', '$64.85'],
  ['Avg Tenure', '32.47', 'months'],
]

const steps = [
  ['01', 'Data Cleaning & EDA', 'Prepared the data and surfaced the signals behind customer behavior.'],
  ['02', 'Customer Segmentation', 'Used K-Means to group customers into 3 meaningful clusters.'],
  ['03', 'Churn Prediction', 'Compared Logistic Regression and Random Forest models.'],
  ['04', 'Interactive Dashboard', 'Translated findings into an accessible Power BI experience.'],
]

const tools = ['Python', 'Pandas', 'Scikit-learn', 'K-Means', 'Logistic Regression', 'Random Forest', 'Power BI', 'DAX']

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add('is-visible'); observer.disconnect() }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><BarChart3 size={17} /> <span>Data analytics portfolio</span></div>
            <h1>Telco Customer Churn<br /><span>Analysis Dashboard</span></h1>
            <p className="hero-subtitle">Better Insights. Lower Churn.</p>
            <a className="hero-link" href="#dashboard">Explore the dashboard <ArrowUpRight size={17} /></a>
          </div>
          <LucideRadioTower className="tower" size={170} strokeWidth={0.75} aria-hidden="true" />
        </div>
      </section>

      <section className="overview section-dark" aria-labelledby="overview-title">
        <div className="container">
          <div className="section-heading"><p className="kicker">Project overview</p><h2 id="overview-title">From raw records<br /><span>to clear action.</span></h2></div>
          <div className="overview-grid">
            {overview.map(({ title, icon: Icon, tone, body }) => <Reveal key={title}><article className="info-card"><Icon className={tone} size={25} strokeWidth={1.7} /><h3>{title}</h3><p>{body}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="Project statistics"><div className="container stats-grid">{stats.map(([label, value, suffix]) => <Reveal key={label}><div className="stat-card"><span>{label}</span><strong>{value}{suffix && <small> {suffix}</small>}</strong></div></Reveal>)}</div></section>

      <section className="dashboard-section section-dark" id="dashboard" aria-labelledby="dashboard-title"><div className="container"><div className="section-heading dashboard-heading"><p className="kicker">Live analysis</p><h2 id="dashboard-title">Explore the <span>Live Dashboard</span></h2><p>Interact with the report to move from high-level churn trends to individual customer signals.</p></div><div className="embed-frame" style={{ maxWidth: '1015px', margin: '0 auto' }}><iframe title="Telco Customer Churn Tableau Dashboard" src="https://public.tableau.com/views/customers_churts/Dashboard1?:showVizHome=no&:embed=true" style={{ width: '100%', height: '850px' }} /></div></div></section>
      <section className="method-section" id="methodology" aria-labelledby="method-title"><div className="container"><div className="section-heading"><p className="kicker">The approach</p><h2 id="method-title">Methodology that<br /><span>moves with the data.</span></h2></div><div className="steps">{steps.map(([number, title, body]) => <Reveal key={number}><article className="step"><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div></article></Reveal>)}</div></div></section>

      <section className="stack-section section-dark" aria-labelledby="stack-title"><div className="container stack-layout"><div><p className="kicker">Built with</p><h2 id="stack-title">The <span>toolkit.</span></h2></div><div className="pills">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></div></section>

      <footer className="footer"><div className="container footer-inner"><a className="footer-brand" href="#top" aria-label="Back to top"><BarChart3 size={19} /> telco<span>churn</span></a><p>Built with data, curiosity, and Power BI</p><div className="socials"><a href="https://github.com" aria-label="GitHub"><GitFork size={19} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Network size={19} /></a></div></div></footer>
    </main>
  )
}
