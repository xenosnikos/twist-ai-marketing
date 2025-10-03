export interface Slide {
    id: number;
    type: 'title' | 'content' | 'diagram' | 'code' | 'table' | 'stats' | 'timeline' | 'cta' | 'code-tooltip';
    title?: string;
    subtitle?: string;
    content?: string;
    items?: string[];
    stats?: Array<{ number: string; label: string; sublabel?: string }>;
    diagram?: string | { type: string; content: string }; // Mermaid diagram code
    code?: { language: string; content: string };
    tooltips?: Array<{ line: number; text: string }>;
    table?: {
        headers: string[];
        rows: Array<{ [key: string]: string }>;
    };
    cards?: Array<{ title: string; content: string; items?: string[] }>;
    quote?: { text: string; author: string };
    buttons?: Array<{ text: string; href?: string; action?: string }>;
    logo?: string;
}

export const slides: Slide[] = [
    // Slide 1: Title
    {
        id: 1,
        type: 'title',
        title: 'AI Enrichment for Marketing Funnels',
        subtitle: 'MCP + Workflow Orchestration',
        logo: '/assets/dofinity-logo.png'
    },

    // Slide 2: The Current Challenge
    {
        id: 2,
        type: 'content',
        title: 'The Current Challenge',
        subtitle: 'Your Marketing Stack Today: Powerful but Disconnected',
        cards: [
            {
                title: 'Pain Points',
                items: [
                    '2-24 hours average response time to leads',
                    '30 minutes per lead for manual qualification',
                    '70% of leads contacted after peak interest',
                    'Manual handoffs between systems create delays',
                    'Sales reps spend time on low-quality leads',
                    'After-hours leads wait until next business day'
                ]
            },
            {
                title: 'The Cost',
                items: [
                    'Lost revenue from slow response',
                    'SDR time wasted on qualification',
                    'Poor prospect experience',
                    'Competitive disadvantage'
                ]
            }
        ]
    },

    // Slide 3: The Vision
    {
        id: 3,
        type: 'content',
        title: 'The Vision',
        subtitle: 'Imagine: Instant, Intelligent, Automated Response',
        cards: [
            {
                title: 'The Future State',
                items: [
                    '< 1 minute response to every lead',
                    '100% automated initial qualification',
                    '24/7 intelligent engagement',
                    '95%+ accurate lead routing',
                    'Personalized at scale with AI',
                    'SDRs focus on high-value conversations'
                ]
            }
        ],
        content: 'Key Innovation: MCP (Model Context Protocol) servers create a unified AI layer across your entire stack'
    },

    // Slide 4: Solution Architecture
    {
        id: 4,
        type: 'diagram',
        title: 'Solution Architecture - High Level',
        subtitle: 'How MCP Servers Unify Your Stack',
        diagram: `graph TB
    subgraph "Current Tools"
        A[Pardot Forms]
        B[SFMC Journeys]
        C[Salesforce CRM]
        D[Slack/Teams]
    end

    subgraph "MCP Server Layer"
        E[Unified API Gateway]
        F[Context Aggregation]
        G[Tool Orchestration]
    end

    subgraph "AI Brain"
        H[Claude/GPT Analysis]
        I[Decision Engine]
        J[Response Generation]
    end

    subgraph "Automation Layer"
        K[Workato/n8n Workflows]
        L[Triggered Actions]
    end

    A --> E
    B --> E
    C --> E
    D --> E

    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L

    L --> A
    L --> B
    L --> C
    L --> D

    style E fill:#f9f,stroke:#333,stroke-width:4px
    style H fill:#bbf,stroke:#333,stroke-width:4px
    style K fill:#bfb,stroke:#333,stroke-width:4px`
    },

    // Slide 5: Detailed Flow
    {
        id: 5,
        type: 'diagram',
        title: 'Intelligent Lead Processing in Action',
        subtitle: 'Detailed Flow - Lead Processing',
        diagram: `sequenceDiagram
    participant Lead
    participant Pardot
    participant MCP as MCP Server
    participant AI as Claude AI
    participant Auto as Automation
    participant CRM as Salesforce
    participant Rep as Sales Rep

    Lead->>Pardot: Fills form
    Pardot->>MCP: Webhook trigger
    MCP->>MCP: Aggregate context from all systems
    MCP->>AI: Send enriched data
    AI->>AI: Analyze intent & score
    AI->>MCP: Return decision

    alt High Intent (Score > 80)
        MCP->>Auto: Trigger instant booking
        Auto->>Lead: Send calendar link
        Auto->>Rep: Alert + context
        Auto->>CRM: Update with insights
    else Medium Intent (Score 50-80)
        MCP->>Auto: Trigger nurture
        Auto->>Lead: Personalized content
        Auto->>CRM: Schedule follow-up
    else Low Intent (Score < 50)
        MCP->>Auto: Educational flow
        Auto->>Lead: Resources
        Auto->>CRM: Add to long-term nurture
    end

    Note over Lead,Rep: Entire process: <60 seconds`
    },

    // Slide 6: Value Proposition - ROI
    {
        id: 6,
        type: 'table',
        title: 'Value Proposition - ROI Calculator',
        subtitle: 'Quantifiable Business Impact',
        table: {
            headers: ['Metric', 'Current State', 'With AI Automation', 'Annual Value'],
            rows: [
                { metric: 'Response Time', current: '2-24 hours', ai: '< 1 minute', value: '+27% conversion rate' },
                { metric: 'SDR Time/Lead', current: '30 minutes', ai: '0 minutes', value: '$180,000 saved' },
                { metric: 'Lead Routing Accuracy', current: '70%', ai: '95%', value: '+18% sales efficiency' },
                { metric: 'After-Hours Coverage', current: 'None', ai: '24/7', value: '+35% lead capture' },
                { metric: 'Personalization', current: 'Template', ai: 'AI-Contextual', value: '+42% engagement' }
            ]
        },
        stats: [
            { number: '$150K', label: 'Investment', sublabel: 'one-time setup + first year' },
            { number: '$180K', label: 'Year 1 Savings', sublabel: 'SDR time alone' },
            { number: '$500K+', label: 'Revenue Lift', sublabel: 'faster response + better routing' },
            { number: '353%', label: 'Total Year 1 ROI' }
        ]
    },

    // Slide 7: MCP Server Capabilities
    {
        id: 7,
        type: 'code-tooltip',
        title: 'MCP Server Capabilities',
        subtitle: 'What Makes MCP Servers Powerful',
        code: {
            language: 'python',
            content: `# MCP Server Tool Definition Example
from mcp import Server, Tool

class MarketingMCPServer:
    @Tool(description="Get complete prospect context")
    async def get_prospect_360(self, email: str):
        """Aggregates data from all systems"""
        data = {
            "pardot": await self.pardot_api.get_prospect(email),
            "sfmc": await self.sfmc_api.get_journey_status(email),
            "salesforce": await self.sf_api.get_contact(email),
            "engagement_score": await self.calculate_score(email),
            "company_intel": await self.get_company_data(email)
        }
        return self.enrich_context(data)

    @Tool(description="Generate AI response")
    async def create_intelligent_response(self, context: dict):
        """Uses AI to create personalized response"""
        prompt = self.build_prompt(context)
        response = await self.claude_api.generate(prompt)
        return self.format_response(response)

    @Tool(description="Execute automated action")
    async def execute_action(self, action_type: str, params: dict):
        """Triggers appropriate workflow"""
        if action_type == "book_meeting":
            return await self.book_calendar_slot(params)
        elif action_type == "send_content":
            return await self.trigger_sfmc_journey(params)`
        },
        tooltips: [
            { line: 6, text: 'get_prospect_360: This tool aggregates complete prospect data from all connected systems (Pardot, SFMC, Salesforce) in real-time, giving AI the full context about the lead.' },
            { line: 9, text: 'Data Aggregation: Simultaneously queries Pardot for lead history, SFMC for email engagement, Salesforce for contact/account data, calculates engagement score, and enriches with company intelligence.' },
            { line: 18, text: 'create_intelligent_response: Uses Claude AI to analyze the aggregated context and generate a personalized response tailored to the prospect\'s journey stage and engagement level.' },
            { line: 25, text: 'execute_action: Automatically executes the appropriate action based on AI analysis - booking calendar slots, triggering SFMC email journeys, or other automated workflows.' }
        ]
    },

    // Slide 8: Implementation Phases
    {
        id: 8,
        type: 'timeline',
        title: '90-Day Implementation Roadmap',
        subtitle: 'Implementation Phases',
        cards: [
            {
                title: 'Phase 1 (Weeks 1-4)',
                items: [
                    'MCP Server Setup',
                    'API Integrations'
                ]
            },
            {
                title: 'Phase 2 (Weeks 5-8)',
                items: [
                    'AI Model Integration',
                    'Prompt Engineering',
                    'Context Training'
                ]
            },
            {
                title: 'Phase 3 (Weeks 9-10)',
                items: [
                    'Workflow Automation',
                    'Testing & Refinement'
                ]
            },
            {
                title: 'Phase 4 (Weeks 11-13)',
                items: [
                    'Pilot Launch',
                    'Optimization',
                    'Full Deployment'
                ]
            }
        ]
    },

    // Slide 9: Use Case Examples
    {
        id: 9,
        type: 'content',
        title: 'Use Case Examples',
        subtitle: 'Real-World Automation Scenarios',
        cards: [
            {
                title: 'Scenario 1: High-Intent Enterprise Lead',
                items: [
                    'Enterprise Lead Requests Demo',
                    'MCP Analyzes → Score: 95',
                    'Book with Enterprise AE',
                    'Send Custom Case Study',
                    'Alert Sales Director',
                    'Create Slack Deal Room'
                ]
            },
            {
                title: 'Scenario 2: Technical Evaluator',
                items: [
                    'Downloads Tech Specs',
                    'MCP Identifies Technical User',
                    'AI Generates Technical Response',
                    'Schedule with Sales Engineer',
                    'Send API Documentation',
                    'Invite to Tech Webinar'
                ]
            },
            {
                title: 'Scenario 3: Competitor Comparison',
                items: [
                    'Mentions Competitor',
                    'MCP Detects Competition',
                    'AI Crafts Positioning',
                    'Send Comparison Guide',
                    'Offer Switching Incentive',
                    'Priority Route to Sales'
                ]
            }
        ]
    },

    // Slide 10: Integration Simplicity
    {
        id: 10,
        type: 'content',
        title: 'Integration Simplicity',
        subtitle: 'Seamless Integration with Your Existing Stack',
        cards: [
            {
                title: '🎯 MCP Context Server',
                items: [
                    'Aggregates data from all marketing systems',
                    'Provides 360° prospect view in real-time',
                    'Connects Pardot, Salesforce, SFMC seamlessly',
                    'Built-in caching for performance',
                    'REST API for easy integration'
                ]
            },
            {
                title: '🤖 Claude AI Analysis',
                items: [
                    'Analyzes prospect context intelligently',
                    'Determines intent level (1-100 scale)',
                    'Suggests personalized next actions',
                    'Generates tailored messaging',
                    'Learns from outcomes over time'
                ]
            },
            {
                title: '🔀 Intelligent Routing',
                items: [
                    'Routes based on AI intent scoring',
                    'High intent (>80): Direct to sales',
                    'Medium intent (50-80): Warm nurture',
                    'Lower intent: Educational content',
                    'Dynamic path optimization'
                ]
            },
            {
                title: '⚡ Automated Execution',
                items: [
                    'Executes actions via n8n workflows',
                    'Triggers SFMC journeys automatically',
                    'Books meetings, sends content',
                    'Creates Salesforce tasks',
                    'All within seconds of form submission'
                ]
            }
        ],
        content: '✨ No Code Required: Drag-and-drop workflow creation • Pre-built connectors • Uses existing APIs • Business users can modify workflows'
    },

    // Slide 11: Competitive Advantage
    {
        id: 11,
        type: 'table',
        title: 'Competitive Advantage',
        subtitle: 'Why This Approach Wins',
        table: {
            headers: ['Traditional Automation', 'AI-Powered MCP Approach'],
            rows: [
                { traditional: 'Rule-based routing', ai: 'Intelligent intent analysis' },
                { traditional: 'Static templates', ai: 'Dynamic personalization' },
                { traditional: 'Business hours only', ai: '24/7 intelligent response' },
                { traditional: 'Single-system data', ai: 'Unified context from all systems' },
                { traditional: 'Manual qualification', ai: 'Automated scoring & routing' },
                { traditional: 'Reactive workflows', ai: 'Predictive next-best actions' }
            ]
        },
        items: [
            'First-Mover Advantage: Few companies have unified AI orchestration',
            'Speed to Lead: Sub-minute response times win deals',
            'Scale Without Headcount: Handle 10x volume without 10x team',
            'Continuous Learning: System improves with every interaction'
        ]
    },

    // Slide 12: Risk Mitigation
    {
        id: 12,
        type: 'table',
        title: 'Risk Mitigation',
        subtitle: 'Addressing Common Concerns',
        table: {
            headers: ['Concern', 'Mitigation Strategy'],
            rows: [
                {
                    concern: 'AI Hallucination',
                    mitigation: '• Human-in-loop for high-value decisions\n• Constrained prompts with guardrails\n• Regular quality audits'
                },
                {
                    concern: 'Data Security',
                    mitigation: '• Self-hosted option with n8n\n• Encrypted API connections\n• No PII in AI prompts'
                },
                {
                    concern: 'Integration Complexity',
                    mitigation: '• Phased rollout approach\n• Start with single use case\n• Proven integration patterns'
                },
                {
                    concern: 'Change Management',
                    mitigation: '• SDR team becomes strategic\n• Clear role evolution path\n• Extensive training provided'
                },
                {
                    concern: 'Cost Overrun',
                    mitigation: '• Fixed-price implementation\n• Predictable API costs\n• ROI milestones defined'
                }
            ]
        }
    },

    // Slide 13: Success Metrics
    {
        id: 13,
        type: 'stats',
        title: 'Success Metrics',
        subtitle: 'Measurable KPIs for Success',
        stats: [
            { number: '<1 min', label: 'Time to First Response', sublabel: 'Target' },
            { number: '<24 hrs', label: 'Lead to Meeting Booked', sublabel: 'Target' },
            { number: '500/mo', label: 'SDR Hours Saved', sublabel: 'Target' },
            { number: '-40%', label: 'Cost per Lead', sublabel: 'Target' },
            { number: '95%', label: 'Lead Routing Accuracy', sublabel: 'Target' },
            { number: '+25%', label: 'Meeting Show Rate', sublabel: 'Target' },
            { number: '+30%', label: 'Pipeline Velocity', sublabel: 'Target' },
            { number: '+25%', label: 'Conversion Rate', sublabel: 'Target' }
        ],
        items: [
            'Real-time metrics visibility',
            'AI decision audit trail',
            'ROI tracking',
            'Continuous optimization insights'
        ]
    },

    // Slide 14: Investment & Timeline
    {
        id: 14,
        type: 'table',
        title: 'Investment & Timeline',
        subtitle: 'Investment Breakdown',
        table: {
            headers: ['Component', 'One-Time Cost', 'Monthly Cost', 'Notes'],
            rows: [
                { component: 'MCP Server Development', onetime: '$30,000', monthly: '-', notes: 'Custom integration layer' },
                { component: 'AI API Setup', onetime: '$5,000', monthly: '$2,000', notes: 'Claude API usage' },
                { component: 'Workflow Automation', onetime: '$15,000', monthly: '$1,000', notes: 'n8n/Workato licensing' },
                { component: 'Implementation', onetime: '$25,000', monthly: '-', notes: 'Setup & configuration' },
                { component: 'Training', onetime: '$10,000', monthly: '-', notes: 'Team enablement' },
                { component: 'Total Year 1', onetime: '$85,000', monthly: '$36,000', notes: '$121,000 total' }
            ]
        },
        content: 'Payback Timeline: Break even in Month 7, Pure ROI in Months 8-12'
    },

    // Slide 15: Next Steps
    {
        id: 15,
        type: 'content',
        title: 'Next Steps',
        subtitle: 'Ready to Transform Your Marketing Operations?',
        cards: [
            {
                title: 'Immediate Actions (Week 1)',
                items: [
                    'Technical Assessment: API accessibility audit',
                    'Current workflow documentation',
                    'Integration point mapping',
                    'Use Case Prioritization: Identify highest-impact automation',
                    'Define success criteria',
                    'Select pilot team',
                    'Stakeholder Alignment: Sales leadership buy-in',
                    'IT security review',
                    'Budget approval'
                ]
            },
            {
                title: 'Proof of Concept (Weeks 2-4)',
                items: [
                    'Build minimal MCP server',
                    'Connect 2-3 key systems',
                    'Demonstrate one automated flow',
                    'Measure initial results'
                ]
            },
            {
                title: 'Decision Gate (Week 5)',
                items: [
                    'Review POC results',
                    'Confirm ROI projections',
                    'Approve full implementation'
                ]
            }
        ]
    },

    // Slide 16: Technical Architecture
    {
        id: 16,
        type: 'diagram',
        title: 'Technical Architecture',
        subtitle: 'Detailed System Components & Data Flow',
        diagram: {
            type: 'flowchart',
            content: `graph TB
    subgraph Marketing["Marketing Stack"]
        Pardot[Pardot Forms & Scoring]
        SFMC[Salesforce Marketing Cloud]
        SFCRM[Salesforce CRM]
    end

    subgraph MCP["MCP Server Layer"]
        API[API Gateway]
        Cache[Context Cache]
        Tools[MCP Tools]
    end

    subgraph AI["AI & Intelligence"]
        Claude[Claude 3.5 Sonnet]
        Score[Scoring Engine]
        Decision[Decision Logic]
    end

    subgraph Auto["Automation & Execution"]
        N8N[n8n Workflows]
        Actions[Action Executor]
        Monitor[Monitoring & Logging]
    end

    Pardot -->|Form Data| API
    SFMC -->|Engagement Data| API
    SFCRM -->|Contact Data| API

    API -->|Aggregate| Cache
    Cache -->|Context| Tools
    Tools -->|Enriched Data| Claude

    Claude -->|Analysis| Score
    Score -->|Intent Level| Decision
    Decision -->|Action Plan| N8N

    N8N -->|Execute| Actions
    Actions -->|Update| SFCRM
    Actions -->|Trigger| SFMC
    Actions -->|Log| Monitor

    Monitor -.->|Feedback| Score

    style Marketing fill:#FFE66D
    style MCP fill:#FFC700
    style AI fill:#FFD700
    style Auto fill:#FFE66D`
        }
    },

    // Slide 17: Why Now?
    {
        id: 17,
        type: 'content',
        title: 'Why Now?',
        subtitle: 'The Perfect Storm of Opportunity',
        cards: [
            {
                title: 'Technology Readiness',
                items: [
                    'MCP Protocol: Newly available (2024) from Anthropic',
                    'AI Maturity: Claude 3.5 and GPT-4 provide reliable reasoning',
                    'API Economy: All tools now API-first',
                    'Workflow Platforms: n8n and Workato mature and stable'
                ]
            },
            {
                title: 'Market Timing',
                items: [
                    'Buyer Expectations: Instant response is now table stakes',
                    'Competition: Most competitors still using basic automation',
                    'Cost Efficiency: AI costs dropped 90% in last year',
                    'Talent Shortage: SDR hiring increasingly difficult'
                ]
            },
            {
                title: 'Your Readiness',
                items: [
                    '✅ Marketing stack already modern (Pardot + SFMC)',
                    '✅ API access available for all systems',
                    '✅ Team ready for innovation',
                    '✅ Clear ROI opportunity identified'
                ]
            }
        ],
        content: 'The Question: Will you lead or follow?'
    },

    // Slide 18: Call to Action
    {
        id: 18,
        type: 'cta',
        title: 'Call to Action',
        subtitle: 'Let\'s Build the Future of Marketing Automation',
        cards: [
            {
                title: 'Option 1: Proof of Concept (Lowest Risk)',
                items: [
                    '4-week sprint',
                    'Single use case',
                    '$25,000 investment',
                    'Go/No-go decision point'
                ]
            },
            {
                title: 'Option 2: Pilot Program (Recommended)',
                items: [
                    '8-week implementation',
                    '3-5 use cases',
                    '$75,000 investment',
                    'Gradual rollout'
                ]
            },
            {
                title: 'Option 3: Full Implementation (Maximum Impact)',
                items: [
                    '12-week transformation',
                    'Complete automation layer',
                    '$150,000 investment',
                    'Immediate competitive advantage'
                ]
            }
        ],
        content: 'Schedule Strategy Session: 30-minute executive briefing • Technical architecture review • ROI deep dive • Implementation roadmap'
    },

    // Slide 19: Thank You
    {
        id: 19,
        type: 'content',
        title: 'Thank You',
        subtitle: 'Questions?',
        items: [
            '⚡ Sub-minute lead response achievable TODAY',
            '🤖 AI + MCP servers = Game-changing automation',
            '💰 353% ROI in Year 1',
            '🚀 90-day implementation timeline',
            '🎯 Proven technology, innovative application'
        ]
    }
];
