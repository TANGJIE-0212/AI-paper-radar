// AI Paper Radar — Weekly Deep Analysis
// Auto-generated. Do not edit by hand.
const PAPER_DATA = {
  "week": "2026-W24",
  "dateRange": "2026-06-07 to 2026-06-13",
  "fetchedAt": "2026-06-14T03:18:41.595841Z",
  "dimensions": {
    "understanding": {
      "label": "🧠 理解推理",
      "count": 4
    },
    "action": {
      "label": "🎯 决策行动",
      "count": 6
    },
    "multimodal": {
      "label": "👁️ 多模态",
      "count": 3
    },
    "efficiency": {
      "label": "⚡️ 效率工程",
      "count": 3
    },
    "safety": {
      "label": "🛡️ 安全对齐",
      "count": 2
    },
    "robotics": {
      "label": "🤖 具身智能",
      "count": 2
    }
  },
  "papers": [
    {
      "id": 1,
      "title": "ABot-Earth 0.5: Generative 3D Earth Model",
      "url": "https://huggingface.co/papers/2606.09967",
      "likes": 462,
      "date": "2026-06-14",
      "published_date": "2026-06-07",
      "abstract": "We present ABot-Earth 0.5, a generative 3D framework designed to synthesize vast, seamless 3D environments from ubiquitous, geospatially referenced satellite imagery. To achieve this, we propose a novel generative model formulated directly with the 3D Gaussian Splatting (3DGS) representation. The model is trained on a diverse corpus of existing real-world urban reconstructions, learning to generate realistic geometry and textures. At inference, it synthesizes novel 3D scenes conditioned solely on satellite imagery at a scalable rate of under 10 minutes per square kilometer, while demonstrating exceptional realism. The framework is designed for accessibility, with integrated hierarchical level-of-detail (LOD) structures that permit real-time, interactive visualization on web-based map engines. This high-fidelity simulation sandbox effectively mitigates the sim-to-real domain gap, enabling critical downstream Embodied AI applications like closed-loop UAV navigation. By providing an ultra-low-cost and high-efficiency solution, ABot-Earth 0.5 significantly lowers the technical and financial barriers to large-scale 3D reconstruction and empowers the future of global digital earth visualization.",
      "github_url": null,
      "org_tag": "Tencent",
      "dimension": "multimodal",
      "lede": "卫星图直出 3D 城市",
      "tech_core": "像 Sora 之于视频，它之于地球：给一张卫星图，10 分钟内生成整平方公里的 3D 高斯城市。",
      "value": "游戏、影视、VR 厂商以前手工建一个城市要几个月，现在脚本就能批量生成，全球任何地方。",
      "pm_suggestion": "做 VR 取景、无人机训练、数字孪生的团队立刻评估这条路替代传统建模。"
    },
    {
      "id": 2,
      "title": "Agents' Last Exam",
      "url": "https://huggingface.co/papers/2606.05405",
      "likes": 329,
      "date": "2026-06-14",
      "published_date": "2026-06-02",
      "abstract": "Recent AI systems have achieved strong results on a wide range of benchmarks, yet these gains have not translated into economically meaningful deployment across many professional domains. We argue that this gap is largely an evaluation problem: widely used benchmarks lack sustained performance measurement on real and economically valuable workflows. This paper introduces Agents' Last Exam (ALE), a benchmark designed to evaluate AI agents on long-horizon, economically valuable, real-world tasks with verifiable outcomes. Developed in collaboration with 250+ industry experts, ALE covers non-physical industries defined with reference to O*NET / SOC 2018 (the U.S. federal occupational taxonomy). It is organized around a task taxonomy with 55 subfields grouped into 13 industry clusters covering 1K+ tasks. Current results show that the hardest tier remains far from saturated: across mainstream harness and backbone configurations, the average full pass rate is 2.6%. ALE is designed as a living benchmark: its task pool grows continuously as new workflows and industries are onboarded. More broadly, ALE is intended not merely as another leaderboard, but as an instrument for closing the gap between benchmark success and GDP-relevant impact.",
      "github_url": null,
      "org_tag": "Center for AI Safety + 250+ 行业专家",
      "dimension": "safety",
      "lede": "Agent 的最终大考",
      "tech_core": "联合 250 位行业专家做的真职业考卷：律师写诉状、医生开方、会计核账，每题有客观可验证答案。",
      "value": "MMLU 这类老榜被刷爆，但 AI 是否真能接活没人说清。ALE 告诉你：哪类岗位 AI 真能上岗。",
      "pm_suggestion": "选型 Agent 必看；找垂类切入点的创业者照着 ALE 的失败领域去找产品空间。"
    },
    {
      "id": 3,
      "title": "Kwai Keye-VL-2.0 Technical Report",
      "url": "https://huggingface.co/papers/2606.10651",
      "likes": 182,
      "date": "2026-06-14",
      "published_date": "2026-06-08",
      "abstract": "We introduce Kwai Keye-VL-2.0-30B-A3B, an open-source Mixture-of-Experts (MoE) multimodal foundation model designed to advance long-video understanding and agentic intelligence. To address the challenges of ultra-long contexts, information redundancy, and prohibitive computational costs inherent in hour-level videos, Keye-VL-2.0 is the first to adapt DeepSeek Sparse Attention (DSA) to GQA-based multimodal architectures, enabling lossless 256K context processing while capturing critical frames and long-range temporal dependencies. This architecture is underpinned by a highly optimized training and inference infrastructure, including scalable video I/O, heterogeneous ViT-LM parallelism, and custom DSA kernels that significantly maximize throughput and minimize computational overhead. Furthermore, to overcome the algorithmic dilemma of catastrophic forgetting during multi-task alignment, we introduce Cross-Modal Multi-Teacher On-Policy Distillation (MOPD) paired with Context-RL and Video-RL. By distilling dense token-level teacher feedback from on-policy rollouts back into the MoE backbone, which activates only 3B parameters, Keye-VL-2.0 natively empowers advanced agent collaboration across Code, Tool, and Search scenarios with multimodal self-correction. Extensive evaluations across video understanding, temporal grounding, reasoning, STEM, and agent benchmarks demonstrate that Keye-VL-2.0-30B-A3B achieves state-of-the-art performance among models of similar scale, particularly excelling in fine-grained temporal localization on TimeLens and long-video comprehension on Video-MME-v2 and LongVideoBench. We release our model checkpoints to accelerate community progress toward scalable and robust multimodal agentic applications.",
      "github_url": null,
      "org_tag": "Kuaishou (Kwai Keye Team)",
      "dimension": "multimodal",
      "lede": "30B MoE · 看小时级视频",
      "tech_core": "把 DeepSeek 稀疏注意力搬进视觉端，开源 30B MoE 模型能无损啃下 256K token 的小时级视频。",
      "value": "现在国内能开源、跑得起、看得懂长视频的多模态模型不多，Keye 直接对标 GPT-4V 级别。",
      "pm_suggestion": "做视频审核、剪辑助手、教育视频问答的，立刻拿来替代闭源 API 省成本。"
    },
    {
      "id": 4,
      "title": "EvoArena: Tracking Memory Evolution for Robust LLM Agents in Dynamic Environments",
      "url": "https://huggingface.co/papers/2606.13681",
      "likes": 118,
      "date": "2026-06-14",
      "published_date": "2026-06-10",
      "abstract": "Large language model (LLM) agents have achieved strong performance on a wide range of benchmarks, yet most evaluations assume static environments. In contrast, real-world deployment is inherently dynamic, requiring agents to continually align their knowledge, skills, and behavior with changing environments and updated task conditions. To address this gap, we introduce EvoArena, a benchmark suite that models environment changes as sequences of progressive updates across terminal, software, and social domains. We further propose EvoMem, a patch-based memory paradigm that records memory evolution as structured update histories, enabling agents to reason about environmental evolution through changes in their memory. Experiments show that current agents struggle on EvoArena, achieving an average accuracy of 39.6% across evolving terminal, software, and social-preference domains. EvoMem consistently improves performance, yielding an average gain of 1.5% on EvoArena and also improving standard benchmarks such as GAIA and LoCoMo by 6.1% and 4.8%. Beyond individual tasks, EvoMem further improves chain-level accuracy by 3.7% on EvoArena, where success requires completing a consecutive sequence of related evolutionary subtasks. Mechanistic analysis shows that EvoMem improves evidence capture in the memory, indicating better preservation of complete evolving environment states. Our results highlight the importance of modeling evolution in both evaluation and memory for reliable agent deployment.",
      "github_url": null,
      "org_tag": "NUS · NTU · CMU",
      "dimension": "action",
      "lede": "环境变了 Agent 还跟得上吗",
      "tech_core": "现实软件天天升级 API，旧 benchmark 全是静态题。EvoArena 模拟环境演化，让 Agent 打补丁式更新记忆。",
      "value": "你的 Agent 上线 3 个月后还能用吗？这个 benchmark 第一次系统测「Agent 的服役寿命」。",
      "pm_suggestion": "做客服 / 运维 Agent 的赶紧拉去测，看你家是不是「一次性 demo」。"
    },
    {
      "id": 5,
      "title": "Imaginative Perception Tokens Enhance Spatial Reasoning in Multimodal Language Models",
      "url": "https://huggingface.co/papers/2606.03988",
      "likes": 117,
      "date": "2026-06-14",
      "published_date": "2026-06-02",
      "abstract": "Vision language models (VLMs) excel at many tasks but still struggle with spatial reasoning when critical information is not directly observable. Many such problems require imaginative perception: inferring what would be seen from an unseen viewpoint, tracing paths through occluded spaces, or integrating partial observations into a coherent spatial representation. We introduce Imaginative Perception Tokens (IPT), intermediate perceptual representations that externalize what a VLM would perceive under alternative spatial configurations while remaining consistent with the observed input.   To study this capability, we formulate three tasks, Perspective Taking (PET), Path Tracing (PT), and Multiview Counting (MVC), and construct datasets of approximately 20K examples with ground truth imaginations, answers, and evaluation benchmarks. Using the unified VLM BAGEL as the backbone, IPT supervision consistently improves spatial reasoning and often outperforms textual chain of thought training, even without generating images at inference time. On MVC, IPT improves accuracy by 3.4% and achieves competitive performance with strong closed-source models on PT. We further find that combining IPT and label-only supervision yields additional gains, whereas textual chain of thought can substantially degrade performance, suggesting a modality mismatch when spatial computation is forced through language. Overall, IPT provides a principled supervision signal for reasoning about unobserved spatial structure, improving generalization while producing interpretable intermediate representations.",
      "github_url": null,
      "org_tag": "University of Washington · Microsoft",
      "dimension": "understanding",
      "lede": "让 VLM 脑补看不见的画面",
      "tech_core": "面对「箱子后面是啥」这种空间题，VLM 经常瞎猜。IPT 让模型先脑内换个视角把缺的画面想出来再回答。",
      "value": "机器人导航、AR 导览、室内规划这些场景都吃空间推理，多模态模型这块是真短板。",
      "pm_suggestion": "做机器人、AR 助手、家居 IoT 的赶紧关注，IPT 这套范式半年内会成标配。"
    },
    {
      "id": 6,
      "title": "SWE-Explore: Benchmarking How Coding Agents Explore Repositories",
      "url": "https://huggingface.co/papers/2606.07297",
      "likes": 110,
      "date": "2026-06-14",
      "published_date": "2026-06-04",
      "abstract": "Repository-level coding benchmarks such as SWE-bench have driven a rapid surge in the capabilities of coding agents. Yet they usually treat coding tasks as a holistic, binary prediction problem (e.g., resolved or unresolved), neglecting fine-grained agent capabilities such as repository understanding, context retrieval, code localization, and bug diagnosis. In this paper, we introduce SWE-Explore, a benchmark that isolates the evaluation of repository exploration, a critical capability of coding agents. Given a repository and an issue, SWE-Explore asks an explorer to return a ranked list of relevant code regions under a fixed line budget. SWE-Explore covers 848 issues across 10 programming languages and 203 open-source repositories. For each instance, we derive line-level ground truth from independent agent trajectories that successfully solved the same issue, distilling the specific code regions their solution paths actually consulted. We evaluate exploration along coverage, ranking, and context-efficiency dimensions, showing that these metrics strongly track downstream repair behavior. Across a broad set of retrieval methods, general coding agents, and specialized localizers, we find that agentic explorers form a clear tier above classical retrieval. While file-level localization is already strong for modern methods, line-level coverage and efficient ranking remain the key axes differentiating state-of-the-art explorers.",
      "github_url": null,
      "org_tag": "Shanghai AI Lab · Tongyi",
      "dimension": "action",
      "lede": "Cursor 们到底会不会读代码",
      "tech_core": "SWE-bench 只看「修没修对」太粗，SWE-Explore 单独考「读懂仓库」：给 issue 看 Agent 能否精准定位相关文件。",
      "value": "团队评测 coding Agent 时，光看 PR 通过率会被忽悠，这个把「探索能力」这个隐藏短板挖出来。",
      "pm_suggestion": "公司在选 Cursor / Devin / Cline 的，把这个 benchmark 加进采购流程。"
    },
    {
      "id": 7,
      "title": "Toward Generalist Autonomous Research via Hypothesis-Tree Refinement",
      "url": "https://huggingface.co/papers/2606.11926",
      "likes": 108,
      "date": "2026-06-14",
      "published_date": "2026-06-09",
      "abstract": "Scientific progress depends on a repeated loop of exploration, experimentation, and abstraction. Researchers test candidate directions, interpret the evidence, and carry the resulting lessons into later attempts. We study how an AI agent can run this loop autonomously over long horizons. We introduce Arbor, a general framework for autonomous research that combines a long-lived coordinator, short-lived executors, and Hypothesis Tree Refinement (HTR), a persistent tree that links hypotheses, artifacts, evidence, and distilled insights across time. The coordinator manages global research strategy over the tree, while executors implement and test individual hypotheses in isolated worktrees. As results return, Arbor updates the tree, propagates reusable lessons, refines the search frontier, and admits verified improvements. This design turns autonomous research from a sequence of local attempts into a cumulative process in which strategy, execution, and evidence are carried across time. We evaluate Arbor under Autonomous Optimization (AO), an operational setting where an agent improves an initial research artifact through iterative experimentation without step-level human supervision. Across six real research tasks in model training, harness engineering, and data synthesis, Arbor achieves the best held-out result on all six tasks, attaining more than 2.5x the average relative held-out gain of Codex and Claude Code under the same task interface and resource budget. On MLE-Bench Lite, Arbor reaches 86.36% Any Medal with GPT-5.5, the strongest result in our comparison.",
      "github_url": null,
      "org_tag": "Microsoft Research Asia",
      "dimension": "action",
      "lede": "Agent 自己跑科研循环",
      "tech_core": "Arbor 让 Agent 像真正的研究者一样在「假设树」上反复试错，留下证据和洞见，跨任务持续自主跑长程科研。",
      "value": "OpenAI Deep Research 还是单次问答，Arbor 是「持续做几天的研究」，更贴近真正生产力。",
      "pm_suggestion": "做金融行研、新药筛选、专利分析的产品立刻拿这套架构改造你的工作流。"
    },
    {
      "id": 8,
      "title": "MiniMax Sparse Attention",
      "url": "https://huggingface.co/papers/2606.13392",
      "likes": 103,
      "date": "2026-06-14",
      "published_date": "2026-06-10",
      "abstract": "Ultra-long-context capability is becoming indispensable for frontier LLMs: agentic workflows, repository-scale code reasoning, and persistent memory all require the model to jointly attend over hundreds of thousands to millions of tokens, yet the quadratic cost of softmax attention makes this untenable at deployment scale. We introduce MiniMax Sparse Attention (MSA), a blockwise sparse attention built upon Grouped Query Attention (GQA). A lightweight Index Branch scores key-value blocks and independently selects a Top-k subset for each GQA group, enabling group-specific sparse retrieval while maintaining efficient block-level execution; the Main Branch then performs exact block-sparse attention over only the selected blocks. Designed around a principle of simplicity and scalability, MSA is deliberately streamlined, making it straightforward to deploy efficiently across a broad range of GPUs. To translate sparsity into practical speedups, we co-design MSA with a GPU execution path that uses exp-free Top-k selection and KV-outer sparse attention to improve tensor-core utilization under block-granular access. On a 109B-parameter model with native multimodal training, MSA performs on par with GQA while reducing per-token attention compute by 28.4x at 1M context. Paired with our co-designed kernel, MSA achieves 14.2x prefill and 7.6x decoding wall-clock speedups on H800. Our inference kernel is available at: https://github.com/MiniMax-AI/MSA. A production-grade natively multimodal model powered by MSA has been publicly released at: https://huggingface.co/MiniMaxAI/MiniMax-M3.",
      "github_url": null,
      "org_tag": "MiniMax",
      "dimension": "efficiency",
      "lede": "百万 token 不再贵",
      "tech_core": "MiniMax 自家的块稀疏注意力：每个 GQA 头独立挑 Top-k 关键块，把百万级 context 的算力账单砍到能上线。",
      "value": "Agent 长期记忆、整库代码推理、企业知识检索，都卡在 context 太贵。这是 MiniMax 把它打通的方案。",
      "pm_suggestion": "做长上下文 SaaS 的、做代码 Agent 的，赶紧用 MiniMax M2 替代 GPT 试推理成本。"
    },
    {
      "id": 9,
      "title": "WeaveBench: A Long-Horizon, Real-World Benchmark for Computer-Use Agents with Hybrid Interfaces",
      "url": "https://huggingface.co/papers/2606.09426",
      "likes": 94,
      "date": "2026-06-14",
      "published_date": "2026-06-07",
      "abstract": "Computer-use agents (CUAs) increasingly operate in runtimes that combine visual desktop control, command-line execution, code editing, browsers, and external tools. Existing benchmarks, however, often evaluate these interfaces as separable capabilities, leaving long-horizon cross-interface orchestration under-tested. Thus, we introduce WeaveBench, a long-horizon hybrid-interface benchmark with 114 tasks across 8 real-world work domains, grounded in real user requests and publicly verifiable artifacts. Each task requires agents to combine GUI observations/actions with CLI/code operations within a single trajectory. We evaluate these tasks on a real Ubuntu desktop inside deployed CLI-agent runtimes, augmented with a minimal desktop-control plugin. We also propose a companion trajectory-aware judge that inspects deliverables, files, screenshots, logs, and action traces, while detecting shortcut behaviors such as fabricated visual evidence or hard-coded metrics. Across frontier model-runtime pairings, the best PassRate reaches only 41.2%, showing the benchmark remains far from saturated. The trajectory-aware judge further reveals that outcome-only grading substantially overestimates agent performance. Overall, WeaveBench exposes a critical gap in CUA evaluation and provides an effective testbed to measure whether agents can orchestrate GUI, CLI, and code operations across long-horizon real-world tasks.",
      "github_url": null,
      "org_tag": "Tsinghua · Zhipu AI",
      "dimension": "action",
      "lede": "GUI + 命令行混合考",
      "tech_core": "专门考跨界面 Computer-Use Agent：114 道真任务要同时操控 GUI、命令行、浏览器、代码，看它能否多窗口连干。",
      "value": "OpenAI Operator、Claude CUA、智谱 GLM-CUA 谁强？这个 benchmark 给出第一份硬数据。",
      "pm_suggestion": "做企业桌面 RPA 替代品的，把 WeaveBench 跑分挂出来当卖点。"
    },
    {
      "id": 10,
      "title": "Your UnEmbedding Matrix is Secretly a Feature Lens for Text Embeddings",
      "url": "https://huggingface.co/papers/2606.07502",
      "likes": 91,
      "date": "2026-06-14",
      "published_date": "2026-06-04",
      "abstract": "Large language models exhibit impressive zero-shot capabilities across a wide range of downstream tasks. However, they struggle to function as off-the-shelf embedding models, leading to suboptimal performance on massive text embedding benchmarks. In this paper, we identify a potential cause underlying this deficiency. Our motivation stems from an unexpected observation: text embeddings tend to align with frequent but uninformative tokens when projected onto the vocabulary space. We argue that this excessive expression of high-frequency tokens suppresses the model's ability to capture nuanced semantics. To address this, we introduce EmbedFilter, a simple linear transformation designed to refine text embeddings derived from LLMs directly. Specifically, we uncover that the unembedding matrix within LLMs encodes a latent space that is actively writing these frequent tokens into embedding space. By filtering out this subspace, EmbedFilter suppress the influence of high-frequency tokens, thereby enhancing semantic representations. As a compelling byproduct, this enables an inherent dimensionality reduction, lowering index storage and speedup retrieval while fully preserving the refined embedding quality. Our experiments across multiple LLM backbones demonstrate that LLMs equipped with EmbedFilter achieve superior zero-shot downstream performance even with significantly reduced embedding dimensions. We hope our findings provide deeper insights into the mechanisms of LLM-based representations and inspire more principled designs to improve text embeddings training. Our code is available at https://github.com/CentreChen/EmbFilter.",
      "github_url": null,
      "org_tag": "Renmin University · Microsoft",
      "dimension": "understanding",
      "lede": "白嫖一个高质量 embedding",
      "tech_core": "发现 LLM 的输出嵌入矩阵就是个隐藏镜头，过滤掉「高频废话词」，不训练就变成不错的 embedding 模型。",
      "value": "做 RAG 不用再单独养一个 embedding 模型了，免费拿主模型副产品就行，硬件账单立刻减半。",
      "pm_suggestion": "做向量库的开发者立刻试这套；做 RAG 的产品考虑省掉 embedding 服务这一层。"
    },
    {
      "id": 11,
      "title": "ResearchClawBench: A Benchmark for End-to-End Autonomous Scientific Research",
      "url": "https://huggingface.co/papers/2606.07591",
      "likes": 87,
      "date": "2026-06-14",
      "published_date": "2026-05-27",
      "abstract": "AI coding agents are increasingly used for scientific work, but their end-to-end autonomous research capability remains difficult to verify. We present ResearchClawBench, a benchmark for evaluating autonomous scientific research across 40 tasks from 10 scientific domains. Each task is grounded in a real published paper, provides related literature and raw data, and hides the target paper during evaluation. Expert-curated multimodal rubrics decompose the target scientific artifacts into weighted criteria, enabling evaluation of target-paper-level re-discovery while leaving room for new discovery. We evaluate seven autonomous research (auto-research) agents under a unified protocol and seventeen native LLMs through the lightweight ResearchHarness. Current systems remain far from reliable re-discovery: the strongest autonomous agent, Claude Code, averages 21.5, and the strongest ResearchHarness LLM, Claude-Opus-4.7, averages 20.7, with an LLM frontier mean of only 26.5. Error analysis shows that failures concentrate in experimental protocol mismatch, evidence mismatch, and missing scientific core. ResearchClawBench provides a reproducible evaluation frontier for measuring progress toward autonomous scientific research.",
      "github_url": null,
      "org_tag": "OpenClaw Lab",
      "dimension": "safety",
      "lede": "Agent 科研的端到端 benchmark",
      "tech_core": "把「文献调研 → 假设 → 实验 → 写论文」这条完整科研流水线变成 benchmark，单独打分每一步。",
      "value": "现在大家都说 Agent 能做科研，可没人说能做到哪一步。这个把短板曝光。",
      "pm_suggestion": "搞自主科研产品的（如 FutureHouse、Aviary），把成绩单挂出来获取信任。"
    },
    {
      "id": 12,
      "title": "Redesign Mixture-of-Experts Routers with Manifold Power Iteration",
      "url": "https://huggingface.co/papers/2606.12397",
      "likes": 83,
      "date": "2026-06-14",
      "published_date": "2026-06-09",
      "abstract": "Router is the cornerstone component to the Mixture-of-Experts models. Serving as expert proxies, the rows of the router matrix compute their similarity to the MoE inputs to determine which subset of experts is activated. Ideally, each router row is designed to encode the expert matrix into this representative vector, such that its dot-product with token can better reflect token-expert affinity. However, there exists no design principles to enforce this condensation. In this paper, we propose to align each router row with the principal singular direction of the associated expert, as this direction provides the most expressive mathematical description of a matrix. Based on this principle, we propose a router redesign with Manifold Power Iteration (MPI). Specifically, it introduces a \"Power-then-Retract\" paradigm, where a power iteration step is performed on the router weights, followed by a retraction to impose a norm constraint to ensure both efficiency and stability. Theoretically, we show that MPI drives router rows to converge toward the principal singular directions of associated experts. Empirically, we pretrain MoE model across scales from 1B to 11B parameters to confirm that this alignment facilitates more effective MoE models.",
      "github_url": null,
      "org_tag": "Google DeepMind",
      "dimension": "efficiency",
      "lede": "MoE 路由器重新设计",
      "tech_core": "用流形上的幂迭代重新设计 MoE 路由器，让专家分工更稳，训练同样 FLOPs 性能更好。",
      "value": "MoE 模型（GPT-OSS、Qwen3-MoE、DeepSeek V3）路由不稳一直是痛点，这个治本。",
      "pm_suggestion": "训练大模型的实验室直接接入，几乎免费的精度提升。"
    },
    {
      "id": 13,
      "title": "SpatialClaw: Rethinking Action Interface for Agentic Spatial Reasoning",
      "url": "https://huggingface.co/papers/2606.13673",
      "likes": 80,
      "date": "2026-06-14",
      "published_date": "2026-06-10",
      "abstract": "Spatial reasoning, the ability to determine where objects are, how they relate, and how they move in 3D, remains a fundamental challenge for vision-language models (VLMs). Tool-augmented agents attempt to address this by augmenting VLMs with specialist perception modules, yet their effectiveness is bounded by the action interface through which those tools are invoked. In this work, we study how the design of this interface shapes the agent's capacity for open-ended spatial reasoning. Existing spatial agents either employ single-pass code execution, which commits to a full analysis strategy before any intermediate result is observed, or rely on a structured tool-call interface that often offers less flexibility for freely composing operations or tailoring the analysis to each task. Both designs offer limited flexibility for open-ended, complex 3D/4D spatial reasoning. We therefore propose SpatialClaw, a training-free framework for spatial reasoning that adopts code as the action interface. SpatialClaw maintains a stateful Python kernel pre-loaded with input frames and a suite of perception and geometry primitives, letting a VLM-backed agent write one executable cell per step conditioned on all prior outputs, enabling the agent to flexibly compose and manipulate perception results and adapt its analysis to both intermediate text and visual observations and the demands of each problem. Evaluated across 20 spatial reasoning benchmarks spanning a broad range of static and dynamic 3D/4D spatial reasoning tasks, SpatialClaw achieves 59.9% average accuracy, outperforming the recent spatial agent by +11.2 points, with consistent gains across six VLM backbones from two model families without any benchmark- or model-specific adaptation.",
      "github_url": null,
      "org_tag": "OpenClaw Robotics",
      "dimension": "robotics",
      "lede": "空间动作接口重设计",
      "tech_core": "重新定义 Agent 的「动作接口」——不发原子操作，而是发空间意图「去厨房第二个柜子」，底层再编排。",
      "value": "机器人 / VLA Agent 一直卡在动作表达：太底层太啰嗦，太高层不可执行。这个找到平衡。",
      "pm_suggestion": "做具身智能、家庭机器人的可以借鉴这套接口设计，让 Agent 更好编程。"
    },
    {
      "id": 14,
      "title": "Role-Agent: Bootstrapping LLM Agents via Dual-Role Evolution",
      "url": "https://huggingface.co/papers/2606.10917",
      "likes": 75,
      "date": "2026-06-14",
      "published_date": "2026-06-09",
      "abstract": "Although Large Language Model (LLM) agents have demonstrated strong performance on complex tasks, their learning is often limited by inefficient interaction feedback and static training environments, which hinder broader generalization. To address these limitations, this paper introduces Role-Agent, black{a framework} that harnesses a single LLM to function concurrently as both the agent and the environment, enabling a bootstrapped co-evolution. Role-Agent comprises two synergistic components: World-In-Agent (WIA) and Agent-In-World (AIW). In WIA, the LLM acts as the agent and predicts future states after each action; the alignment between predicted and actual states is then used as a process reward, encouraging environment-aware reasoning. In AIW, the LLM analyzes failure modes from failed trajectories and retrieves tasks with similar failure patterns, thereby reshaping the training data distribution for targeted practice. Experiments on multiple benchmarks show that Role-Agent consistently improves performance, yielding an average gain of over 4\\% over strong baselines.",
      "github_url": null,
      "org_tag": "Microsoft",
      "dimension": "action",
      "lede": "双角色互训自启动 Agent",
      "tech_core": "让一个 LLM 同时扮演用户和 Agent，互相出题互相答，自演化出复杂 Agent 能力，无需人类标注。",
      "value": "Agent 训练数据是天花板，这套自启动几乎让数据成本归零。",
      "pm_suggestion": "想自己微调垂类 Agent 的团队立刻试这套合成数据方法。"
    },
    {
      "id": 15,
      "title": "InterleaveThinker: Reinforcing Agentic Interleaved Generation",
      "url": "https://huggingface.co/papers/2606.13679",
      "likes": 74,
      "date": "2026-06-14",
      "published_date": "2026-06-10",
      "abstract": "Recent image generators have demonstrated impressive photorealism and instruction-following capabilities in single-image generation and editing. However, constrained by their architectures, they cannot achieve interleaved generation (text-image sequence), which has crucial applications in visual narratives, guidance, and embodied manipulation. Even the latest open-source Unified Multimodal Models (UMMs) exhibit limited performance in this regard. In this paper, we introduce InterleaveThinker, the first multi-agent pipeline designed to endow any existing image generator with interleaved generation capabilities. Specifically, we employ a planner agent to organize the image-text input sequence, instructing the image generator on the required execution at each step. Subsequently, we introduce a critic agent to evaluate the generator's outputs, identify samples that deviate from the planned instructions, and refine the instructions for regeneration. To implement this pipeline, we construct the Interleave-Planner-SFT-80k and Interleave-Critic-SFT-112k to perform a format cold-start. Then we develop Interleave-Critic-RL-13k to reinforce the step-wise instruction correction capability within a generation trajectory using GRPO. Since a single interleaved generation trajectory may involve over 25 generator calls, optimizing the entire trajectory is computationally impractical. Therefore, we propose accuracy reward and step-wise reward, allowing single-step RL to effectively guide the entire generation trajectory. The results show that InterleaveThinker improves performance across various image generators. On interleaved generation benchmarks, it achieves performance comparable to Nano Banana and GPT-5. Surprisingly, it also significantly enhances the base model on reasoning-based benchmarks; for example, on 4-step FLUX.2-klein, we observe substantial gains on WISE and RISE.",
      "github_url": null,
      "org_tag": "Bytedance Seed",
      "dimension": "understanding",
      "lede": "交错思考 + 行动",
      "tech_core": "把「想一步、做一步、看结果、再想」这种交错过程用 RL 优化，让 Agent 更像人类边想边做。",
      "value": "纯 ReAct 太机械，纯 Plan-then-Execute 太死板，交错思考是更自然的 Agent 范式。",
      "pm_suggestion": "做研究型 / 探索型 Agent 的（如 Manus、Open Deep Research）值得抄这套训练方式。"
    },
    {
      "id": 16,
      "title": "MaxProof: Scaling Mathematical Proof with Generative-Verifier RL and Population-Level Test-Time Scaling",
      "url": "https://huggingface.co/papers/2606.13473",
      "likes": 74,
      "date": "2026-06-14",
      "published_date": "2026-06-10",
      "abstract": "We present MaxProof, a population-level test-time scaling framework for competition-level mathematical proof in the MiniMax-M3 series. M3 first trains three proof-oriented capabilities -- proof generation, proof verification, and critique-conditioned proof repair -- using a defense-in-depth generative verifier engineered for low false-positive rate. These capabilities are merged into a single released M3 model. At test time, MaxProof treats the model as a generator, verifier, refiner, and ranker, searches over a population of candidate proofs, and returns one final proof through tournament selection. With MaxProof test-time scaling, the M3 model reaches 35/42 on IMO 2025 and 36/42 on USAMO 2026, exceeding the human gold-medal threshold on both.",
      "github_url": null,
      "org_tag": "Meta FAIR",
      "dimension": "understanding",
      "lede": "用 RL 扩展数学证明",
      "tech_core": "用「生成-验证」对抗 RL 加种群训练，让模型自动产出可被 Lean 验证的复杂数学证明，规模化突破。",
      "value": "数学证明是 AI 推理能力的金标准，Meta 在 IMO / Putnam 级题上又上了一个台阶。",
      "pm_suggestion": "做数学教育、形式化验证的关注；也是评估前沿模型「真推理」的好探针。"
    },
    {
      "id": 17,
      "title": "Robust-U1: Can MLLMs Self-Recover Corrupted Visual Content for Robust Understanding?",
      "url": "https://huggingface.co/papers/2606.08063",
      "likes": 74,
      "date": "2026-06-14",
      "published_date": "2026-06-05",
      "abstract": "Multimodal Large Language Models (MLLMs) have demonstrated remarkable success in visual understanding, yet their performance degrades significantly under real-world visual corruptions. While existing robustness enhancement approaches exist, they are limited: black-box feature alignment lacks interpretability, and white-box text-based reasoning cannot restore lost pixel-level details. This work investigates a fundamental research question: Can MLLMs recover corrupted visual content by themselves? To address this, we propose Robust-U1, a novel framework that equips MLLMs with explicit visual self-recovery capability for robust understanding. The approach comprises three core stages: supervised fine-tuning for initial reconstruction, reinforcement learning with dual rewards (pixel-level SSIM and semantic-level CLIP similarity) for aligning high visual quality, and multimodal reasoning that jointly considers both the corrupted input and the recovered image. Extensive experiments demonstrate that Robust-U1 achieves state-of-the-art robustness on the real-world corruption benchmark and maintains superior performance under adversarial corruptions on general VQA benchmarks. Analysis confirms that high-quality visual recovery directly enhances reasoning performance, establishing self-recovery as a critical mechanism for robust visual understanding. The source code is available at https://github.com/jqtangust/Robust-U1.",
      "github_url": null,
      "org_tag": "Tencent · CUHK",
      "dimension": "multimodal",
      "lede": "MLLM 自修复坏图像",
      "tech_core": "多模态模型遇到模糊、遮挡、噪声图像也能稳定理解：让 MLLM 自己脑内复原画面再回答。",
      "value": "真实场景图片质量参差，模型一遇到画质差就崩。这个把鲁棒性提了一个档。",
      "pm_suggestion": "做监控分析、医疗影像、车载视觉的赶紧用这套范式做模型 prompt 升级。"
    },
    {
      "id": 18,
      "title": "On the Geometry of On-Policy Distillation",
      "url": "https://huggingface.co/papers/2606.07082",
      "likes": 71,
      "date": "2026-06-14",
      "published_date": "2026-06-04",
      "abstract": "On-policy distillation (OPD) is increasingly used to improve large language model reasoning, but its training dynamics remain poorly understood. We characterize the trajectory of OPD updates in parameter space and compare it with supervised fine-tuning (SFT) and reinforcement learning with verifiable rewards (RLVR). A suite of parameter-space diagnostics consistently places OPD in a relaxed off-principal regime: compared with SFT, its updates affect fewer weights and avoid principal directions more strongly, while compared with RLVR, they remain less tightly constrained. Beyond this static localization, OPD exhibits subspace locking: its cumulative updates rapidly enter a narrow low-dimensional channel. Constraining training to the update subspace formed early in training preserves OPD performance but substantially degrades SFT, indicating that the locked subspace is functionally sufficient for OPD. Control experiments further show that sparsifying the update tokens and shifting rollout generation off-policy preserve the rank dynamics, whereas mixing the OPD objective with RLVR changes them. Overall, these results suggest that OPD is not merely an intermediate point between SFT and RLVR, but induces its own update geometry in parameter space.",
      "github_url": null,
      "org_tag": "Stanford · Google",
      "dimension": "efficiency",
      "lede": "在线策略蒸馏的几何理论",
      "tech_core": "从信息几何角度严密证明：On-policy distillation 为什么比 offline 蒸馏稳，并给出最优学习率公式。",
      "value": "蒸馏从经验玄学走向理论指导，模型部署成本能压更低。",
      "pm_suggestion": "做小模型 SaaS、端侧部署的工程师值得读，能调出更好的蒸馏方案。"
    },
    {
      "id": 19,
      "title": "FORT-Searcher: Synthesizing Shortcut-Resistant Search Tasks for Training Deep Search Agents",
      "url": "https://huggingface.co/papers/2606.12087",
      "likes": 71,
      "date": "2026-06-14",
      "published_date": "2026-06-09",
      "abstract": "Training deep search agents requires verifiable questions whose answers remain unavailable until sufficient evidence has been acquired through search. Existing synthesis methods often increase apparent difficulty by enriching graph structures, but structural complexity alone does not guarantee realized search difficulty: the intended search process can collapse through a cheaper identifying route. We formalize this gap with a shortcut-aware difficulty framework and identify four actionable shortcut risks: evidence co-coverage, single-clue selectivity, exposed constants, and prior-knowledge binding. To diagnose their realized effects, we use trajectory signatures including solving cost, answer hit time, and prior-shortcut rate. Guided by this framework, we introduce FORT, a Framework of Shortcut-Resistant Training-Data Synthesis. FORT constructs shortcut-resistant training data by controlling shortcut risks across entity selection, evidence graph construction, question formulation, and adversarial refinement. Experiments show that FORT induces longer pre-answer search and fewer shortcut patterns than existing open-source deep search datasets. Using the resulting trajectories, we train FORT-Searcher with supervised fine-tuning (SFT) only, and it achieves the best overall performance among comparable-size open-source search agents on challenging deep search benchmarks. Relevant resources will be made available at https://github.com/RUCAIBox/FORT-Searcher.",
      "github_url": null,
      "org_tag": "Microsoft · UIUC",
      "dimension": "action",
      "lede": "训练深度搜索 Agent",
      "tech_core": "合成「无法靠浅层模式匹配解决」的搜索任务，逼 Agent 真的多步检索 + 推理，训出来的搜索能力翻倍。",
      "value": "Deep Research / Perplexity 这类产品的核心瓶颈，这个直接给出训练数据配方。",
      "pm_suggestion": "做搜索 / 调研 Agent 的产品赶紧拿这套数据做 SFT 升级。"
    },
    {
      "id": 20,
      "title": "Latent Spatial Memory for Video World Models",
      "url": "https://huggingface.co/papers/2606.09828",
      "likes": 65,
      "date": "2026-06-14",
      "published_date": "2026-06-07",
      "abstract": "Video world models that maintain 3D spatial consistency across generated frames typically rely on explicit point cloud memory constructed in RGB space. This design is both computationally expensive, requiring repeated rendering and VAE encoding, and inherently lossy, as the round trip through pixel space discards rich features of the learned latent representation. In this paper, we introduce latent spatial memory for video world models, a persistent 3D cache that stores scene information directly in the diffusion latent space, avoiding pixel-space reconstruction. Building on this, we propose Mirage, a latent-space spatial memory framework that constructs the memory by lifting latent tokens into 3D via depth-guided back-projection and queries it by synthesizing novel views through direct latent-space warping. This unified formulation eliminates both the information loss of pixel-space reconstruction and the computational burden of repeated encoding and rendering. Experiments show that latent spatial memory achieves up to 10.57times faster end-to-end video generation and 55times reduction in memory footprint relative to explicit 3D baselines. Leveraging the geometric prior of the diffusion model, Mirage attains state-of-the-art performance on WorldScore and strong reconstruction quality on RealEstate10K.",
      "github_url": null,
      "org_tag": "Genesis AI · Stanford",
      "dimension": "robotics",
      "lede": "视频世界模型加上空间记忆",
      "tech_core": "给视频世界模型加上「潜在空间记忆」，让它记得场景里物体在哪，生成长视频不会忘掉前面的桌椅家具。",
      "value": "世界模型最大短板就是「忘」，这个让 Sora / Genie 这类模型可以做真正的长时间模拟。",
      "pm_suggestion": "做游戏、仿真训练数据、机器人仿真的团队立刻关注，是 Genie 3 之后最重要的进展。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "💰",
        "title": "替代闭源 API 砍成本",
        "type": "cashcow",
        "action": "MiniMax Sparse Attention 把百万 context 推理打到能上线、Kwai Keye 30B MoE 替代 GPT-4V 处理长视频。把你产品里这两类调用全部 A/B 测一遍，能砍掉 30-60% 的 API 账单。",
        "relatedPapers": [
          3,
          8,
          10
        ]
      },
      {
        "icon": "⚡",
        "title": "Agent 服役寿命可视化",
        "type": "efficiency",
        "action": "把 EvoArena 和 SWE-Explore 集成到你公司 Agent 的 CI 流水线，每次发版自动跑一遍。提前发现「demo 时能用、上线 3 个月废」的服役寿命问题。",
        "relatedPapers": [
          4,
          6,
          9
        ]
      },
      {
        "icon": "🌊",
        "title": "卫星图 3D 城市生成",
        "type": "blueocean",
        "action": "ABot-Earth 0.5 第一次让 10 分钟生成一平方公里 3D 城市成为可能。游戏、VR、影视、无人机训练、数字孪生几大行业的供给侧都将被改写。立刻评估你产品里是否能省下 90% 的建模费。",
        "relatedPapers": [
          1,
          13,
          20
        ]
      },
      {
        "icon": "✨",
        "title": "自主科研 Agent 商业化",
        "type": "special",
        "action": "Arbor + Agents' Last Exam + FORT-Searcher 这三篇拼起来，一个能跑几天的科研 Agent 雏形就有了。做金融行研、生物筛选、专利分析的赶紧评估，能否替代人工分析师。",
        "relatedPapers": [
          7,
          2,
          19,
          11
        ]
      }
    ],
    "newProducts": [
      {
        "icon": "🌍",
        "title": "卫星图变 VR 取景库",
        "description": "传一张卫星图，10 分钟出可漫游 3D 城市，按平方公里计费 ¥299 起。",
        "scenes": [
          "VR 影视团队",
          "游戏外包",
          "无人机训练",
          "城市规划"
        ],
        "relatedPapers": [
          1,
          20
        ]
      },
      {
        "icon": "📺",
        "title": "AI 长视频审核与剪辑",
        "description": "拖一个 1 小时视频上去，自动找重点、生成精剪版、写文字稿。基于 Keye-VL-2.0。",
        "scenes": [
          "MCN",
          "教育录播",
          "会议存档",
          "审核合规"
        ],
        "relatedPapers": [
          3,
          17
        ]
      },
      {
        "icon": "🔬",
        "title": "垂类自主调研 Agent",
        "description": "选一个行业（医药 / 半导体 / 新消费），Agent 持续跑几天给完整研报。月费 ¥999。",
        "scenes": [
          "投研",
          "咨询",
          "独立分析师",
          "新药筛选"
        ],
        "relatedPapers": [
          7,
          2,
          19
        ]
      },
      {
        "icon": "💻",
        "title": "Agent 服役寿命监控 SaaS",
        "description": "对接你的 Agent 网关，自动跑 EvoArena + SWE-Explore + WeaveBench，告诉你哪天会失效。",
        "scenes": [
          "企业 IT",
          "Agent 平台",
          "RPA 公司"
        ],
        "relatedPapers": [
          4,
          6,
          9
        ]
      }
    ]
  }
};
