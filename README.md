# Startup Profile and Products

**RoosCloset Labs - A Year of Exploration and Focus**

---

## The Journey

A year ago, I set out to build simple e-commerce tools for businesses in Bangladesh. The vision was practical: create digital solutions that made sense for the local market. The domain `rooscloset.store` reflected that original mission—a closet of tools for store owners.

But as I studied the problems facing digital businesses in Bangladesh and globally, I discovered something deeper. The opportunities were not just in tooling. They were in solving fundamental challenges that had gone unaddressed for years.

Over the course of twelve months, through research, prototyping, and production deployment, I identified two distinct but complementary problems:

1. Civic administration systems in Bangladesh remain fragmented and difficult to navigate. Citizens lack digital support for government documentation and processes.
2. Fashion e-commerce globally loses 100 billion dollars annually to returns caused by poor product data, sizing uncertainty, and a lack of predictive intelligence.

These discoveries led to a strategic pivot. Instead of building a general e-commerce toolkit, I chose to build two focused, AWS-native products solving specific, high-impact problems. Both are now deployed, documented, and ready for production use.

---

## The Two Product Silos

### PROJECT 1: BOROBHAI - Bengali Civic AI Assistant
**Repository:** [najmun-ai/Bangla-AI](https://github.com/najmun-ai/Bangla-AI)  
**Status:** Complete and production-ready

BoroBhai is an AI-powered civic assistant helping Bengali-speaking citizens navigate government documentation and administrative processes through conversational AI.

* **Capabilities:** Provides real-time guidance, generates civic documents (CVs, letters, applications, certificates), handles file manipulation (PDF compression, image resizing, Excel generation), and offers Bengali voice input.
* **Retrieval Architecture:** Context-aware information is retrieved from a specialized knowledge base encompassing 179 civic procedures.
* **Target Users:** Bangladeshi citizens navigating complex government processes.
* **Business Model:** Freemium (free tier with limited requests, paid tier for unlimited access).
* **Impact:** Reduces friction in civic administration, helping underserved populations access government services.

### PROJECT 2: ROOSCLOSET RETAIL INTELLIGENCE
**Repository:** [najmun-ai/rooscloset-retail-intelligence](https://github.com/najmun-ai/rooscloset-retail-intelligence)  
**Status:** Complete and production-ready

RoosCloset Retail Intelligence is a B2B AWS-native machine learning platform solving the 100 billion dollar annual loss in fashion e-commerce caused by catalog misattribution and poor return prediction.

* **ATLAS (Semantic Catalog Intelligence):** Transforms raw product images and merchant descriptions into 180+ structured attributes and generates 512-dimensional style embeddings for aesthetic search. Extracts return risk flags in under 60 seconds per SKU, replacing manual tagging teams and legacy tools.
* **MIRROR (Causal Return Intelligence):** Scores orders at checkout in under 150ms. Explains the causal roots of returns, prescribes ranked interventions with ROI estimates, and learns with every order through a cross-product flywheel.
* **Target Customers:** DTC brands and multi-brand retailers with 1,000-50,000 SKUs and $1M-$50M GMV.
* **Business Model:** Usage-based SaaS (per-SKU for ATLAS, per-order for MIRROR).
* **Impact:** Reduces return rates by identifying causal roots, improving catalog quality through continuous learning.

---

## Engineering Philosophy & AWS Infrastructure

Both products share the same core insight: AI should solve specific, high-impact problems rather than provide generic tooling. Both are AWS-native, multi-tenant from day one, and designed to be deployed, not just consumed.

Together, they demonstrate mastery across two distinct verticals utilizing **22 AWS native services** for scalability, reliability, and cost efficiency.

### BOROBHAI (7 AWS Services)
* **Compute:** AWS Lambda (orchestrator, file tools, presign handler) & AWS API Gateway (HTTP/2 REST API).
* **AI & ML:** Amazon Bedrock (Claude 3.5 Sonnet) & Amazon Titan Embeddings (1024-dimensional vectors).
* **Storage & DB:** Amazon S3 (7-day lifecycle) & DynamoDB (session state).
* **Monitoring:** Amazon CloudWatch.
* **Cost Efficiency:** Highly optimized architecture running at $22 per month at MVP scale.

### ROOSCLOSET RETAIL INTELLIGENCE (15 AWS Services)
* **Compute & Orchestration:** AWS Lambda, AWS Step Functions (5-stage ATLAS pipeline), AWS API Gateway.
* **AI & ML:** Amazon Bedrock (Claude 3 Sonnet), Amazon SageMaker (CLIP model, XGBoost), Amazon Rekognition.
* **Storage & Data:** Amazon S3, Amazon DynamoDB, Amazon OpenSearch Serverless.
* **Streaming:** Amazon Kinesis, Amazon SQS, Amazon EventBridge.
* **Security & Auth:** Amazon Cognito (multi-tenant user management).
* **Cost Efficiency:** Designed for massive scale; running at $35-50/month at MVP scale, scaling to $1,500-$2,500/month at 10M orders.

Both architectures are 100% defined as TypeScript CDK infrastructure as code. This is production ML infrastructure, not a wrapper.

---

## Execution Roadmap

**Phase 1 (Completed): Production Maturity**
* BoroBhai: Complete codebase (39 files, 340 KB) deployed and documented.
* RoosCloset: Complete codebase (18 files, 156 KB) deployed and documented.

**Phase 2 (Months 1-4): Soft Launch & Product-Market Fit**
* Deploy ATLAS and MIRROR for pilot retailers.
* Test BoroBhai with civic partners in Bangladesh.
* Measure initial signals and refine pricing models.

**Phase 3 (Months 5-8): Scale & Professionalize**
* Scale to 5-10 paid customers.
* Hire first full-stack or backend developer.
* Build sales infrastructure and optimize models based on live data.

**Phase 4 (Months 9-12): Institutional Preparation**
* Achieve positive unit economics.
* Compile portfolio of case studies and metrics.

---

## Contact

**Founder:** Najmun Nahar Khan  
**Email:** najmun@rooscloset.store  
**Phone:** +8801798344063  
**Website:** www.rooscloset.store  
**GitHub:** [najmun-ai](https://github.com/najmun-ai)
