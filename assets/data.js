// AI Paper Radar - Weekly Analysis
const PAPER_DATA = {
  "week": "2026-W15",
  "dateRange": "2026-04-05 to 2026-04-11",
  "dimensions": {
    "understanding": {
      "name": "理解与记忆",
      "icon": "🧠",
      "keywords": [
        "long context",
        "reasoning",
        "chain of thought",
        "inference",
        "math",
        "RAG",
        "memory",
        "retrieval"
      ]
    },
    "action": {
      "name": "行动能力",
      "icon": "🧰",
      "keywords": [
        "tool use",
        "agent",
        "function calling",
        "planning",
        "MCP",
        "code"
      ]
    },
    "multimodal": {
      "name": "多模态",
      "icon": "🖼",
      "keywords": [
        "vision",
        "image",
        "video",
        "visual",
        "OCR"
      ]
    },
    "efficiency": {
      "name": "效率与成本",
      "icon": "⚙️",
      "keywords": [
        "quantization",
        "distillation",
        "compression",
        "pruning",
        "efficient"
      ]
    },
    "safety": {
      "name": "可靠性与安全",
      "icon": "🛡",
      "keywords": [
        "hallucination",
        "alignment",
        "safety",
        "robustness",
        "evaluation",
        "guardrail"
      ]
    },
    "robotics": {
      "name": "机器人/具身智能",
      "icon": "🦾",
      "keywords": [
        "robot",
        "VLA",
        "embodied",
        "world model",
        "simulation"
      ]
    }
  },
  "papers": [
    {
      "id": 1,
      "title": "Adam's Law: Textual Frequency Law on Large Language Models",
      "url": "https://huggingface.co/papers/2604.02176",
      "likes": 461,
      "date": "2026-04-13",
      "published_date": "Apr 2",
      "abstract": "While textual frequency has been validated as relevant to human cognition in reading speed, its relatedness toLarge Language Models(LLMs) is seldom studied. We propose a novel research direction in terms of textual data frequency, which is an understudied topic, to the best of our knowledge. Our framework is composed of three units. First, this paper proposesTextual Frequency Law(TFL), which indicates that frequent textual data should be preferred for LLMs for bothpromptingandfine-tuning. Since many LLMs are closed-source in their training data, we propose using online resources to estimate thesentence-level frequency. We then utilize aninput paraphraserto paraphrase the input into a more frequent textual expression. Next, we proposeTextual Frequency Distillation(TFD) by querying LLMs to conductstory completionby further extending the sentences in the datasets, and the resulting corpora are used to adjust the initial estimation. Finally, we proposeCurriculum Textual Frequency Training(CTFT) that fine-tunes LLMs in an increasing order ofsentence-level frequency. Experiments are conducted on our curated dataset Textual Frequency Paired Dataset (TFPD) onmath reasoning,machine translation,commonsense reasoningandagentic tool calling. Results show the effectiveness of our framework.",
      "github_url": "https://github.com/HongyuanLuke/frequencylaw",
      "org_tag": "FaceMind",
      "dimension": "understanding",
      "tech_core": "它抓住一个很反直觉的点：模型更吃得下训练里常见、表达更顺手的说法，所以先把输入改写成“模型熟悉的话”，再按文本频率排序训练。",
      "value": "适合提示优化、数据清洗和行业微调，解决同一个意思换个拗口说法模型就掉线、训练数据看着够多但表达分布很乱的问题。",
      "pm_suggestion": "如果你的产品高度依赖 prompt 稳定性，先把用户输入做“高频表达改写”再喂模型；这比继续堆提示词模板更快见效。"
    },
    {
      "id": 2,
      "title": "GrandCode: Achieving Grandmaster Level in Competitive Programming via Agentic Reinforcement Learning",
      "url": "https://huggingface.co/papers/2604.02721",
      "likes": 349,
      "date": "2026-04-13",
      "published_date": "Apr 3",
      "abstract": "Competitive programmingremains one of the last few human strongholds in coding against AI. The best AI system to date still underperforms the best humanscompetitive programming: the most recent best result, Google's Gemini~3 Deep Think, attained 8th place even not being evaluated under live competition conditions. In this work, we introduce GrandCode, amulti-agent RLsystem designed forcompetitive programming. The capability of GrandCode is attributed to two key factors: (1) It orchestrates a variety of agentic modules (hypothesis proposal, solver, test generator, summarization, etc) and jointly improves them throughpost-trainingandonline test-time RL; (2) We introduceAgentic GRPOspecifically designed for multi-stage agent rollouts with delayed rewards and the severe off-policy drift that is prevalent in agentic RL. GrandCode is the first AI system that consistently beats all human participants in live contests ofcompetitive programming: in the most recent threeCodeforceslive competitions, i.e., Round~1087 (Mar 21, 2026), Round~1088 (Mar 28, 2026), and Round~1089 (Mar 29, 2026), GrandCode placed first in all of them, beating all human participants, including legendarygrandmasters. GrandCode shows that AI systems have reached a point where they surpass the strongest human programmers on the most competitive coding tasks.",
      "github_url": "https://github.com/deepreinforce-ai/codeforces",
      "org_tag": "DeepReinforce",
      "dimension": "action",
      "tech_core": "它把做题拆成提假设、写解法、造测试、做总结等多个 agent，再用适合长链路延迟奖励的 RL 一起训练，像把竞赛队伍练成了协同作战系统。",
      "value": "适合 Coding Agent、自动调试和复杂工作流编排，解决单个模型会写代码但不会系统试错、不会自测、在高难任务里越做越乱的问题。",
      "pm_suggestion": "如果你在做代码 Agent，别再迷信单模型一把梭，立刻把“提方案-验证-复盘”拆成多角色流水线；复杂任务的上限已经证明在协作结构里。"
    },
    {
      "id": 3,
      "title": "Rethinking Generalization in Reasoning SFT: A Conditional Analysis on Optimization, Data, and Model Capability",
      "url": "https://huggingface.co/papers/2604.06628",
      "likes": 298,
      "date": "2026-04-13",
      "published_date": "Apr 8",
      "abstract": "A prevailing narrative in LLM post-training holds thatsupervised finetuning(SFT) memorizes whilereinforcement learning(RL) generalizes. We revisit this claim for reasoning SFT withlong chain-of-thought(CoT) supervision and find thatcross-domain generalizationis not absent but conditional, jointly shaped byoptimization dynamics,training data, andbase-model capability. Some reported failures are under-optimization artifacts: cross-domain performance first degrades before recovering and improving with extended training (adip-and-recovery pattern), so shorttraining checkpoints can underestimate generalization.Data qualityand structure both matter: low-quality solutions broadly hurt generalization,while verified long-CoT traces yield consistent cross-domain gains.Model capabilityis essential: stronger models internalize transferable procedural patterns (e.g., backtracking) even from a toy arithmetic game, while weaker ones imitate surface verbosity. This generalization is asymmetric, however: reasoning improves while safety degrades, reframing the question from whether reasoning SFT generalizes to under what conditions and at what cost.",
      "github_url": "https://github.com/Nebularaid2000/rethink_sft_generalization",
      "org_tag": "AI45Research",
      "dimension": "understanding",
      "tech_core": "这篇论文打破了“SFT 只会死记硬背”的懒判断：只要训练够深、数据够真、底模够强，长 CoT 的通用推理能力是能迁移出来的。",
      "value": "适合推理模型后训练、领域适配和教育类推理产品，解决团队过早否定 SFT 路线、用短周期实验误判方法无效的问题。",
      "pm_suggestion": "如果你在训推理模型，把 checkpoint 拉长再下结论，并把 verified long-CoT 设为高优先级数据资产；别拿早期回落就宣布路线失败。"
    },
    {
      "id": 4,
      "title": "SkillClaw: Let Skills Evolve Collectively with Agentic Evolver",
      "url": "https://huggingface.co/papers/2604.08377",
      "likes": 263,
      "date": "2026-04-13",
      "published_date": "Apr 9",
      "abstract": "Large language model (LLM) agents such as OpenClaw rely onreusable skillsto perform complex tasks, yet these skills remain largely static after deployment. As a result, similar workflows, tool usage patterns, and failure modes are repeatedly rediscovered across users, preventing the system from improving with experience. While interactions from different users provide complementary signals about when a skill works or fails, existing systems lack a mechanism to convert such heterogeneous experiences into reliable skill updates. To address these issues, we present SkillClaw, a framework for collective skill evolution inmulti-user agent ecosystems, which treats cross-user and over-time interactions as the primary signal for improving skills. SkillClaw continuously aggregates trajectories generated during use and processes them with anautonomous evolver, which identifies recurring behavioral patterns and translates them into updates to the skill set by refining existing skills or extending them with new capabilities. The resulting skills are maintained in ashared repositoryand synchronized across users, allowing improvements discovered in one context to propagate system-wide while requiring no additional effort from users. By integrating multi-user experience into ongoing skill updates, SkillClaw enablescross-user knowledge transferandcumulative capability improvement, and experiments on WildClawBench show that limited interaction and feedback, it significantly improves the performance of Qwen3-Max in real-world agent scenarios.",
      "github_url": "https://github.com/AMAP-ML/SkillClaw",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它把用户真实使用轨迹当成技能更新燃料，自动找出反复出现的成功模式和失败模式，再把这些经验沉淀回共享技能库。",
      "value": "适合多用户 Agent 平台和企业内部助手，解决技能一上线就冻结、每个团队都重复踩坑、好经验没法跨用户扩散的问题。",
      "pm_suggestion": "如果你运营的是 Agent 平台，立刻把技能版本迭代做成产品主链路；没有群体学习闭环，平台能力会越用越碎。"
    },
    {
      "id": 5,
      "title": "ClawBench: Can AI Agents Complete Everyday Online Tasks?",
      "url": "https://huggingface.co/papers/2604.08523",
      "likes": 244,
      "date": "2026-04-13",
      "published_date": "Apr 9",
      "abstract": "AI agentsmay be able to automate your inbox, but can they automate other routine aspects of your life? Everydayonline tasksoffer a realistic yet unsolved testbed for evaluating the next generation ofAI agents. To this end, we introduce ClawBench, anevaluation frameworkof 153 simple tasks that people need to accomplish regularly in their lives and work, spanning 144 live platforms across 15 categories, from completing purchases and booking appointments to submitting job applications. These tasks require demanding capabilities beyond existing benchmarks, such as obtaining relevant information from user-provided documents, navigatingmulti-step workflowsacross diverse platforms, and write-heavy operations like filling in many detailed forms correctly. Unlike existing benchmarks that evaluate agents in offline sandboxes with static pages, ClawBench operates on production websites, preserving the full complexity, dynamic nature, and challenges ofreal-world web interaction. A lightweight interception layer captures and blocks only the final submission request, ensuring safe evaluation without real-world side effects. Our evaluations of 7 frontier models show that both proprietary and open-source models can complete only a small portion of these tasks. For example, Claude Sonnet 4.6 achieves only 33.3%. Progress on ClawBench brings us closer toAI agentsthat can function as reliable general-purpose assistants.",
      "github_url": "https://github.com/reacher-z/ClawBench",
      "org_tag": "Natural and Artificial Intelligence Lab",
      "dimension": "safety",
      "tech_core": "它把 Agent 拉回真实网站做日常任务，还在最后提交前统一拦截，相当于第一次在“真环境、不真伤害”的条件下量能力。",
      "value": "适合生活助手、求职助手和事务自动化产品，解决沙盒 benchmark 分数好看但一上真实网页就迷路、填表出错、流程中断的问题。",
      "pm_suggestion": "如果你卖通用 Agent，先拿真实网站任务过一遍体检；离线 demo 再漂亮，真实完成率只有三成就别急着讲万能助手。"
    },
    {
      "id": 6,
      "title": "Video-MME-v2: Towards the Next Stage in Benchmarks for Comprehensive Video Understanding",
      "url": "https://huggingface.co/papers/2604.05015",
      "likes": 228,
      "date": "2026-04-13",
      "published_date": "Apr 6",
      "abstract": "With the rapid advancement ofvideo understanding, existing benchmarks are becoming increasingly saturated, exposing a critical discrepancy between inflated leaderboard scores and real-world model capabilities. To address this widening gap, we introduce Video-MME-v2, a comprehensive benchmark designed to rigorously evaluate the robustness and faithfulness ofvideo understanding. To systematically evaluate model capabilities, we design aprogressive tri-level hierarchythat incrementally increases the complexity of video comprehension, ranging from multi-pointvisual information aggregation, totemporal dynamics modeling, and ultimately to complexmultimodal reasoning. Besides, in contrast to conventional per-question accuracy, we propose agroup-based non-linear evaluationstrategy that enforces both consistency across related queries and coherence in multi-step reasoning. It penalizes fragmented or guess-based correctness and assigns credit only to answers supported by valid reasoning. To guarantee data quality, Video-MME-v2 is constructed through a rigorously controlledhuman annotation pipeline, involving 12 annotators and 50 independent reviewers. Backed by 3,300 human-hours and up to 5 rounds of quality assurance, Video-MME-v2 aims to serve as one of the most authoritative video benchmarks. Extensive experiments reveal a substantial gap between current best model Gemini-3-Pro and human experts, and uncover a clearhierarchical bottleneckwhere errors invisual information aggregationand temporal modeling propagate to limithigh-level reasoning. We further find thatthinking-based reasoningis highly dependent ontextual cues, improving performance withsubtitlesbut sometimes degrading it in purely visual settings. By exposing these limitations, Video-MME-v2 establishes a demanding new testbed for the development of next-generationvideo MLLMs.",
      "github_url": "https://github.com/MME-Benchmarks/Video-MME-v2",
      "org_tag": "MME-Benchmarks",
      "dimension": "multimodal",
      "tech_core": "它不再按单题对错给视频模型发糖，而是按“看到了没有、时间关系懂没懂、推理链有没有自洽”分层拷问。",
      "value": "适合视频理解、视频搜索和视频 Agent 团队，解决榜单分数虚高、模型靠字幕猜题、复杂时序推理一碰就碎的问题。",
      "pm_suggestion": "如果你在做视频产品，把评测从 accuracy 升级到分层一致性；只看最终答案，你会持续高估自己的视频能力。"
    },
    {
      "id": 7,
      "title": "InCoder-32B-Thinking: Industrial Code World Model for Thinking",
      "url": "https://huggingface.co/papers/2604.03144",
      "likes": 228,
      "date": "2026-04-13",
      "published_date": "Apr 3",
      "abstract": "Industrial software development across chip design, GPU optimization, and embedded systems lacks expertreasoning tracesshowing how engineers reason about hardware constraints and timing semantics. In this work, we propose InCoder-32B-Thinking, trained on the data from theError-driven Chain-of-Thought(ECoT) synthesis framework with anindustrial code world model(ICWM) to generatereasoning traces. Specifically, ECoT generates reasoning chains by synthesizing the thinking content from multi-turn dialogue with environmental error feedback, explicitly modeling the error-correction process. ICWM is trained on domain-specific execution traces fromVerilog simulation,GPU profiling, etc., learns thecausal dynamicsof how code affects hardware behavior, and enablesself-verificationby predictingexecution outcomesbefore actual compilation. All synthesizedreasoning tracesare validated throughdomain toolchains, creating training data matching the natural reasoning depth distribution of industrial tasks. Evaluation on 14 general (81.3% on LiveCodeBench v5) and 9 industrial benchmarks (84.0% in CAD-Coder and 38.0% on KernelBench) shows InCoder-32B-Thinking achieves top-tier open-source results across all domains.GPU Optimization",
      "github_url": "https://github.com/CSJianYang/Industrial-Coder",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它给代码模型补上“工业世界模型”：不是只看源码本身，而是提前推演代码对芯片、GPU 和嵌入式环境会造成什么后果。",
      "value": "适合芯片软件、内核优化和嵌入式开发助手，解决模型能写语法正确的代码，却完全不懂时序、资源约束和真实执行反馈的问题。",
      "pm_suggestion": "如果你做专业代码 Agent，必须把领域执行反馈接进训练闭环；没有 world model 的代码助手，进不了高价值工业场景。"
    },
    {
      "id": 8,
      "title": "OpenWorldLib: A Unified Codebase and Definition of Advanced World Models",
      "url": "https://huggingface.co/papers/2604.04707",
      "likes": 200,
      "date": "2026-04-13",
      "published_date": "Apr 6",
      "abstract": "World modelshave garnered significant attention as a promising research direction in artificial intelligence, yet a clear and unified definition remains lacking. In this paper, we introduce OpenWorldLib, a comprehensive and standardized inference framework for AdvancedWorld Models. Drawing on the evolution ofworld models, we propose a clear definition: a world model is a model or framework centered onperception, equipped withinteractionandlong-term memorycapabilities, for understanding and predicting the complex world. We further systematically categorize the essential capabilities ofworld models. Based on this definition, OpenWorldLib integrates models across different tasks within aunified framework, enabling efficient reuse andcollaborative inference. Finally, we present additional reflections and analyses on potential future directions for world model research. Code link: https://github.com/OpenDCAI/OpenWorldLib",
      "github_url": "https://github.com/OpenDCAI/OpenWorldLib",
      "org_tag": "Peking University",
      "dimension": "robotics",
      "tech_core": "这篇工作想做的不是再堆一个 world model，而是先把 world model 该长什么样讲清楚，再把感知、交互、记忆这些模块放进统一框架。",
      "value": "适合具身智能、仿真平台和世界模型基础设施团队，解决大家都在喊 world model，但定义混乱、模块不可复用、实验口径各说各话的问题。",
      "pm_suggestion": "如果你团队准备押 world model，先统一内部定义和模块边界；概念没对齐前就猛做产品，只会把 roadmap 做成拼盘。"
    },
    {
      "id": 9,
      "title": "HY-Embodied-0.5: Embodied Foundation Models for Real-World Agents",
      "url": "https://huggingface.co/papers/2604.07430",
      "likes": 156,
      "date": "2026-04-13",
      "published_date": "Apr 8",
      "abstract": "We introduce HY-Embodied-0.5, a family of foundation models specifically designed for real-worldembodied agents. To bridge the gap between generalVision-Language Models(VLMs) and the demands ofembodied agents, our models are developed to enhance the core capabilities required by embodied intelligence: spatial and temporal visual perception, alongside advanced embodied reasoning for prediction, interaction, and planning. The HY-Embodied-0.5 suite comprises two primary variants: an efficient model with 2B activated parameters designed for edge deployment, and a powerful model with 32B activated parameters targeted for complex reasoning. To support the fine-grained visual perception essential for embodied tasks, we adopt aMixture-of-Transformers(MoT) architecture to enable modality-specific computing. By incorporatinglatent tokens, this design effectively enhances the perceptual representation of the models. To improve reasoning capabilities, we introduce an iterative, self-evolving post-training paradigm. Furthermore, we employon-policy distillationto transfer the advanced capabilities of the large model to the smaller variant, thereby maximizing the performance potential of the compact model. Extensive evaluations across 22 benchmarks, spanning visual perception, spatial reasoning, and embodied understanding, demonstrate the effectiveness of our approach. Our MoT-2B model outperforms similarly sized state-of-the-art models on 16 benchmarks, while the 32B variant achieves performance comparable to frontier models such as Gemini 3.0 Pro. In downstream robot control experiments, we leverage our robust VLM foundation to train an effective Vision-Language-Action (VLA) model, achieving compelling results in real-world physical evaluations. Code and models are open-sourced at https://github.com/Tencent-Hunyuan/HY-Embodied.",
      "github_url": "https://github.com/Tencent-Hunyuan/HY-Embodied",
      "org_tag": "Tencent Hunyuan",
      "dimension": "robotics",
      "tech_core": "它把具身模型拆成两档：小模型负责边缘侧部署，大模型负责复杂推理，再用蒸馏把大模型的具身能力往小模型身上搬。",
      "value": "适合机器人控制、智能硬件和边缘部署场景，解决通用 VLM 看得懂但不够会行动、能上机的模型又太弱的两难。",
      "pm_suggestion": "如果你做真实机器人，别直接拿通用 VLM 上机，优先布局“大模型学能力、小模型跑现场”的双层架构；这是能落地的路线。"
    },
    {
      "id": 10,
      "title": "Self-Distilled RLVR",
      "url": "https://huggingface.co/papers/2604.03128",
      "likes": 155,
      "date": "2026-04-13",
      "published_date": "Apr 3",
      "abstract": "On-policy distillation(OPD) has become a popular training paradigm in the LLM community. This paradigm selects a larger model as the teacher to provide dense, fine-grained signals for each sampled trajectory, in contrast toreinforcement learning with verifiable rewards(RLVR), which only obtains sparse signals from verifiable outcomes in the environment. Recently, the community has exploredon-policy self-distillation(OPSD), where the same model serves as both teacher and student, with the teacher receiving additional privileged information such as reference answers to enable self-evolution. This paper demonstrates that learning signals solely derived from the privileged teacher result in severe information leakage and unstable long-term training. Accordingly, we identify the optimal niche forself-distillationand propose RLSD (RLVR withSelf-Distillation). Specifically, we leverageself-distillationto obtain token-levelpolicy differencesfor determining fine-grainedupdate magnitudes, while continuing to use RLVR to derive reliableupdate directionsfrom environmental feedback (e.g., response correctness). This enables RLSD to simultaneously harness the strengths of both RLVR and OPSD, achieving a higherconvergence ceilingand superiortraining stability.",
      "github_url": null,
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "它不让模型只听“带答案的自己”瞎教，而是用自蒸馏只控制每一步该改多大，真正往哪儿改仍然交给环境奖励决定。",
      "value": "适合数学、代码和可验证推理训练，解决纯自蒸馏容易信息泄漏、看起来学得快但后期训练越来越不稳的问题。",
      "pm_suggestion": "如果你在做 RLVR，不要把 self-distillation 当主奖励源；把它降级成细粒度调节器，稳定性会比盲目追 dense signal 更重要。"
    },
    {
      "id": 11,
      "title": "MinerU2.5-Pro: Pushing the Limits of Data-Centric Document Parsing at Scale",
      "url": "https://huggingface.co/papers/2604.04771",
      "likes": 115,
      "date": "2026-04-13",
      "published_date": "Apr 6",
      "abstract": "Current document parsing methods compete primarily on model architecture innovation, while systematic engineering of training data remains underexplored. Yet SOTA models of different architectures and parameter scales exhibit highly consistent failure patterns on the same set of hard samples, suggesting that the performance bottleneck stems from shared deficiencies in training data rather than architecture itself. Building on this finding, we present \\minerupro, which advances the state of the art solely throughdata engineering and training strategy optimization while keeping the 1.2B-parameter architecture of \\mineru completely fixed. At its core is aData Engineco-designed around coverage, informativeness, and annotation accuracy:Diversity-and-Difficulty-Aware Samplingexpands training data from under 10M to 65.5M samples while correcting distribution shift;Cross-Model Consistency Verificationleverages output agreement among heterogeneous models to assess sample difficulty and generate reliable annotations; theJudge-and-Refine pipelineimproves annotation quality for hard samples through render-then-verify iterative correction. A three-stageprogressive training strategy--large-scale pre-training,hard sample fine-tuning, andGRPO alignment-- sequentially exploits these data at different quality tiers. On the evaluation front, we fix element-matching biases in OmniDocBench~v1.5 and introduce a Hard subset, establishing the more discriminative OmniDocBench~v1.6 protocol. Without any architectural modification, \\minerupro achieves 95.69 on OmniDocBench~v1.6, improving over the same-architecture baseline by 2.71 points and surpassing all existing methods including models with over 200times more parameters.",
      "github_url": null,
      "org_tag": "OpenDataLab",
      "dimension": "multimodal",
      "tech_core": "它证明文档解析的瓶颈很多时候不在模型结构，而在训练数据工程：先把难样本、脏标注和分布偏差收拾干净，老架构也能继续涨。",
      "value": "适合 OCR、票据解析和企业知识入库，解决大家一味换大模型却对复杂版式、脏扫描件和硬样本长期啃不动的问题。",
      "pm_suggestion": "如果你做文档 AI，立刻把预算从“换模型”挪一部分给数据引擎；这个赛道谁先把难样本做透，谁先拿企业单。"
    },
    {
      "id": 12,
      "title": "Claw-Eval: Toward Trustworthy Evaluation of Autonomous Agents",
      "url": "https://huggingface.co/papers/2604.06132",
      "likes": 111,
      "date": "2026-04-13",
      "published_date": "Apr 7",
      "abstract": "Large language modelsare increasingly deployed asautonomous agentsexecutingmulti-step workflowsin real-world software environments. However, existingagent benchmarkssuffer from three critical limitations: (1)trajectory-opaque gradingthat checks only final outputs, (2) underspecified safety androbustness evaluation, and (3) narrow modality coverage and interaction paradigms. We introduce Claw-Eval, an end-to-end evaluation suite addressing all three gaps. It comprises 300 human-verified tasks spanning 9 categories across three groups (general service orchestration,multimodal perceptionand generation, and multi-turn professional dialogue). Every agent action is recorded through three independent evidence channels (execution traces, audit logs, and environment snapshots), enablingtrajectory-aware gradingover 2,159 fine-grained rubric items. The scoring protocol evaluates Completion, Safety, and Robustness, reporting Average Score,Pass@k, andPass^kacross three trials to distinguish genuine capability from lucky outcomes. Experiments on 14 frontier models reveal that: (1) trajectory-opaque evaluation is systematically unreliable, missing 44% of safety violations and 13% of robustness failures that our hybrid pipeline catches; (2) controlled error injection primarily degrades consistency rather than peak capability, with Pass^3 dropping up to 24% while Pass@3 remains stable; (3) multimodal performance varies sharply, with most models performing poorer on video than on document or image, and no single model dominating across all modalities. Beyond benchmarking, Claw-Eval highlights actionable directions for agent development, shedding light on what it takes to build agents that are not only capable but reliably deployable.",
      "github_url": "https://github.com/claw-eval/claw-eval",
      "org_tag": "Claw-Eval",
      "dimension": "safety",
      "tech_core": "它把 Agent 评测从只看最终结果，升级成全程录像+审计日志+环境快照三路取证，能把侥幸成功和真正可靠区分开。",
      "value": "适合企业 Agent、自动化流程和多模态助手，解决很多系统 Pass@1 看着不差，但安全违规和鲁棒性崩溃全被结果评分掩盖的问题。",
      "pm_suggestion": "如果你的 Agent 准备进生产，立刻把 trajectory-aware 评测设成出厂标准；没有证据链的高分，不能算可交付能力。"
    },
    {
      "id": 13,
      "title": "When Numbers Speak: Aligning Textual Numerals and Visual Instances in Text-to-Video Diffusion Models",
      "url": "https://huggingface.co/papers/2604.08546",
      "likes": 109,
      "date": "2026-04-13",
      "published_date": "Apr 9",
      "abstract": "Text-to-video diffusion modelshave enabled open-ended video synthesis, but often struggle with generating the correct number of objects specified in a prompt. We introduce NUMINA , a training-free identify-then-guide framework for improvednumerical alignment. NUMINA identifiesprompt-layout inconsistenciesby selecting discriminative self- andcross-attention headsto derive a countablelatent layout. It then refines this layout conservatively and modulates cross-attention to guide regeneration. On the introducedCountBench, NUMINA improves counting accuracy by up to 7.4% on Wan2.1-1.3B, and by 4.9% and 5.5% on 5B and 14B models, respectively. Furthermore,CLIP alignmentis improved while maintainingtemporal consistency. These results demonstrate that structural guidance complements seed search and prompt enhancement, offering a practical path toward count-accurate text-to-video diffusion. The code is available at https://github.com/H-EmbodVis/NUMINA.",
      "github_url": "https://github.com/H-EmbodVis/NUMINA",
      "org_tag": "H-EmbodVis",
      "dimension": "multimodal",
      "tech_core": "它不重训模型，而是先在注意力里找出“物体数目和布局不对”的地方，再按这个结构去纠偏重生视频。",
      "value": "适合广告视频、商品展示和教育演示，解决提示里写了“三辆车”结果视频里只冒出两辆、数量关系一错就商业不可用的问题。",
      "pm_suggestion": "如果你卖商用视频生成，把“数目一致性”列成硬指标并单独收费；客户对美学能容忍，对数量错误不会。"
    },
    {
      "id": 14,
      "title": "TriAttention: Efficient Long Reasoning with Trigonometric KV Compression",
      "url": "https://huggingface.co/papers/2604.04921",
      "likes": 103,
      "date": "2026-04-13",
      "published_date": "Apr 6",
      "abstract": "Extended reasoning in large language models (LLMs) creates severe KV cache memory bottlenecks. LeadingKV cache compressionmethods estimate KV importance usingattention scoresfrom recent post-RoPEqueries. However, queries rotate with position duringRoPE, making representative queries very few, leading to poor top-key selection and unstable reasoning. To avoid this issue, we turn to thepre-RoPE space, where we observe that Q and K vectors are highly concentrated around fixed non-zero centers and remain stable across positions --Q/K concentration. We show that this concentration causes queries to preferentially attend to keys at specific distances (e.g., nearest keys), with the centers determining which distances are preferred via atrigonometric series. Based on this, we propose TriAttention to estimate key importance by leveraging these centers. Via thetrigonometric series, we use the distance preference characterized by these centers to score keys according to their positions, and also leverage Q/K norms as an additional signal for importance estimation. On AIME25 with 32K-token generation, TriAttention matches Full Attention reasoning accuracy while achieving 2.5x higher throughput or 10.7x KVmemory reduction, whereas leading baselines achieve only about half the accuracy at the same efficiency. TriAttention enables OpenClaw deployment on a single consumer GPU, where long context would otherwise cause out-of-memory with Full Attention.",
      "github_url": "https://github.com/WeianMao/triattention",
      "org_tag": "NVIDIA",
      "dimension": "efficiency",
      "tech_core": "它不是靠拍脑袋删 KV，而是先看 RoPE 之前稳定的 Q/K 分布，按“哪些距离最重要”来压缩缓存，所以长推理还能保住脑子。",
      "value": "适合长上下文问答、深度推理和本地部署，解决长链路一开就爆显存、压狠了精度掉一半、不压又根本跑不起来的问题。",
      "pm_suggestion": "如果你的长推理产品还在为显存发愁，优先测试这种位置感知 KV 压缩；能把高端卡需求降到消费卡，商业面立刻变大。"
    },
    {
      "id": 15,
      "title": "MegaStyle: Constructing Diverse and Scalable Style Dataset via Consistent Text-to-Image Style Mapping",
      "url": "https://huggingface.co/papers/2604.08364",
      "likes": 92,
      "date": "2026-04-13",
      "published_date": "Apr 9",
      "abstract": "In this paper, we introduce MegaStyle, a novel and scalable data curation pipeline that constructs an intra-style consistent, inter-style diverse and high-qualitystyle dataset. We achieve this by leveraging the consistent text-to-image style mapping capability of currentlarge generative models, which can generate images in the same style from a given style description. Building on this foundation, we curate a diverse and balanced prompt gallery with 170K style prompts and 400K content prompts, and generate a large-scalestyle datasetMegaStyle-1.4M via content-style prompt combinations. With MegaStyle-1.4M, we propose style-supervisedcontrastive learningto fine-tune astyle encoderMegaStyle-Encoder for extracting expressive, style-specific representations, and we also train a FLUX-basedstyle transfermodel MegaStyle-FLUX. Extensive experiments demonstrate the importance of maintaining intra-style consistency, inter-style diversity and high-quality forstyle dataset, as well as the effectiveness of the proposed MegaStyle-1.4M. Moreover, when trained on MegaStyle-1.4M, MegaStyle-Encoder and MegaStyle-FLUX provide reliable style similarity measurement and generalizablestyle transfer, making a significant contribution to thestyle transfercommunity. More results are available at our project website https://jeoyal.github.io/MegaStyle/.",
      "github_url": null,
      "org_tag": "Tencent",
      "dimension": "multimodal",
      "tech_core": "它把“风格”先系统化描述，再批量组合内容和风格 prompt 生成大规模数据集，相当于给风格迁移做了一套工业化原料工厂。",
      "value": "适合设计工具、品牌视觉和 IP 风格控制，解决风格数据零碎、同一风格前后不一致、模型迁移后味道变形的问题。",
      "pm_suggestion": "如果你做商业设计生成，赶紧把风格数据资产独立经营；未来竞争点不是谁会生成，而是谁能稳定复现指定风格。"
    },
    {
      "id": 16,
      "title": "LIBERO-Para: A Diagnostic Benchmark and Metrics for Paraphrase Robustness in VLA Models",
      "url": "https://huggingface.co/papers/2603.28301",
      "likes": 81,
      "date": "2026-04-13",
      "published_date": "Mar 30",
      "abstract": "Vision-Language-Action (VLA) models achieve strong performance in robotic manipulation by leveraging pre-trained vision-language backbones. However, in downstream robotic settings, they are typicallyfine-tunedwith limited data, leading to overfitting to specific instruction formulations and leaving robustness to paraphrased instructions underexplored. To study this gap, we introduce LIBERO-Para, a controlled benchmark that independently varies action expressions and object references for fine-grained analysis oflinguistic generalization. Across seven VLA configurations (0.6B-7.5B), we observe consistent performance degradation of 22-52 pp underparaphrasing. This degradation is primarily driven by object-level lexical variation: even simple synonym substitutions cause large drops, indicating reliance on surface-level matching rather thansemantic grounding. Moreover, 80-96% of failures arise from planning-leveltrajectory divergencerather than execution errors, showing thatparaphrasingdisrupts task identification.Binary success ratetreats all paraphrases equally, obscuring whether models perform consistently across difficulty levels or rely on easier cases. To address this, we propose PRIDE, a metric that quantifies paraphrase difficulty using semantic and syntactic factors. Our benchmark and corresponding code are available at: https://github.com/cau-hai-lab/LIBERO-Para",
      "github_url": "https://github.com/cau-hai-lab/LIBERO-Para",
      "org_tag": "Human-centered AI Laboratory",
      "dimension": "robotics",
      "tech_core": "它专门测机器人会不会被一句话换个说法就搞懵，结果发现很多 VLA 其实是在背措辞，不是在真懂任务。",
      "value": "适合家庭机器人、仓储机械臂和语音控制设备，解决用户明明说的是同一件事，机器人却因为词不一样就规划到完全不同动作的问题。",
      "pm_suggestion": "如果你做 VLA，先把 paraphrase robustness 过关再谈泛化；连同义改写都扛不住，真实家庭场景会把你打回原形。"
    },
    {
      "id": 17,
      "title": "A Simple Baseline for Streaming Video Understanding",
      "url": "https://huggingface.co/papers/2604.02317",
      "likes": 72,
      "date": "2026-04-13",
      "published_date": "Apr 2",
      "abstract": "Recentstreaming video understandingmethods increasingly rely on complexmemory mechanismsto handle long video streams. We challenge this trend with a simple finding: asliding-window baselinethat feeds only the most recent N frames to an off-the-shelf VLM already matches or surpasses published streaming models. We formalize this baseline as SimpleStream and evaluate it against 13 major offline and onlinevideo LLMbaselines onOVO-BenchandStreamingBench. Despite its simplicity, SimpleStream delivers consistently strong performance. With only 4 recent frames, it reaches 67.7% average accuracy onOVO-Benchand 80.59% onStreamingBench. Controlled ablations further show that the value of longer context is backbone-dependent rather than uniformly increasing with model scale, and reveal a consistentperception-memory trade-off: adding more historical context can improve recall, but often weakens real-time perception. This suggests that stronger memory, retrieval, or compression modules should not be taken as evidence of progress unless they clearly outperform SimpleStream under the same protocol. We therefore argue that future streaming benchmarks should separate recent-scene perception from long-range memory, so that performance improvements from added complexity can be evaluated more clearly.",
      "github_url": "https://github.com/EvolvingLMMs-Lab/SimpleStream",
      "org_tag": "LMMs-Lab",
      "dimension": "multimodal",
      "tech_core": "它用一个很朴素的滑窗基线提醒大家：很多“复杂记忆模块”的提升，其实没比只看最近几帧强多少。",
      "value": "适合监控分析、会议摘要和实时视频助手，解决团队过早引入复杂长记忆设计，结果延迟变高、感知变差、收益却不明显的问题。",
      "pm_suggestion": "如果你在做流式视频理解，先把滑窗基线打穿再加复杂记忆；连简单方案都没超，就别往架构里继续塞模块。"
    },
    {
      "id": 18,
      "title": "Learning to Retrieve from Agent Trajectories",
      "url": "https://huggingface.co/papers/2604.04949",
      "likes": 67,
      "date": "2026-04-13",
      "published_date": "Mar 30",
      "abstract": "Information retrieval (IR) systems have traditionally been designed and trained for human users, withlearning-to-rankmethods relying heavily on large-scale human interaction logs such as clicks and dwell time. With the rapid emergence of large language model (LLM) poweredsearch agents, however, retrieval is increasingly consumed by agents rather than human beings, and is embedded as a core component within multi-turn reasoning and action loops. In this setting,retrieval modelstrained under human-centric assumptions exhibit a fundamental mismatch with the way agents issue queries and consume results. In this work, we argue thatretrieval modelsfor agentic search should be trained directly from agent interaction data. We introduce learning to retrieve fromagent trajectoriesas a new training paradigm, where supervision is derived from multi-step agent interactions. Through a systematic analysis of searchagent trajectories, we identify key behavioral signals that reveal document utility, including browsing actions, unbrowsed rejections, and post-browse reasoning traces. Guided by these insights, we propose LRAT, a simple yet effective framework that mines high-quality retrieval supervision fromagent trajectoriesand incorporatesrelevance intensitythroughweighted optimization. Extensive experiments on both in-domain and out-of-domain deep research benchmarks demonstrate that retrievers trained with LRAT consistently improveevidence recall, end-to-endtask success, andexecution efficiencyacross diverse agent architectures and scales. Our results highlightagent trajectoriesas a practical and scalable supervision source, pointing to a promising direction for retrieval in the era of agentic search.",
      "github_url": "https://github.com/Yuqi-Zhou/LRAT",
      "org_tag": "RUC-GSAI-IIRLab",
      "dimension": "understanding",
      "tech_core": "它不再用人类点击日志训练检索器，而是直接从 Agent 的搜索轨迹里学“哪些文档真帮到了后续推理和行动”。",
      "value": "适合 Deep Research、检索问答和搜索 Agent，解决给人设计的检索排序一旦换成 Agent 使用，就经常召回不准、证据链断裂的问题。",
      "pm_suggestion": "如果你做 Agent 搜索，把检索训练数据源换成 agent trajectory；继续拿人类点击当主监督，会越调越偏。"
    },
    {
      "id": 19,
      "title": "Think in Strokes, Not Pixels: Process-Driven Image Generation via Interleaved Reasoning",
      "url": "https://huggingface.co/papers/2604.04746",
      "likes": 65,
      "date": "2026-04-13",
      "published_date": "Apr 8",
      "abstract": "Humans paint images incrementally: they plan a global layout, sketch a coarse draft, inspect, and refine details, and most importantly, each step is grounded in the evolving visual states. However, can unified multimodal models trained on text-image interleaved datasets also imagine the chain of intermediate states? In this paper, we introduce process-driven image generation, a multi-step paradigm that decomposes synthesis into an interleaved reasoning trajectory of thoughts and actions. Rather than generating images in a single step, our approach unfolds across multiple iterations, each consisting of 4 stages:textual planning,visual drafting,textual reflection, andvisual refinement. The textual reasoning explicitly conditions how the visual state should evolve, while the generated visual intermediate in turn constrains and grounds the next round of textual reasoning. A core challenge of process-driven generation stems from the ambiguity of intermediate states: how can models evaluate each partially-complete image? We address this through dense,step-wise supervisionthat maintains two complementary constraints: for the visual intermediate states, we enforce the spatial andsemantic consistency; for the textual intermediate states, we preserve the prior visual knowledge while enabling the model to identify and correctprompt-violating elements. This makes the generation process explicit, interpretable, and directly supervisable. To validate proposed method, we conduct experiments under various text-to-image generation benchmarks.",
      "github_url": null,
      "org_tag": "AI at Meta",
      "dimension": "multimodal",
      "tech_core": "它让图像生成像人画画一样分步骤进行：先规划、再起稿、再反思、再修细节，而不是一次性把像素砸出来。",
      "value": "适合高要求设计、角色设定和复杂构图生成，解决单步出图可解释性差、局部错了没法系统修、用户只能反复抽卡的问题。",
      "pm_suggestion": "如果你做高端图像生成，把“中间态可编辑”做成产品核心；会展示过程的模型，比只会憋终稿的模型更接近专业工具。"
    },
    {
      "id": 20,
      "title": "RAGEN-2: Reasoning Collapse in Agentic RL",
      "url": "https://huggingface.co/papers/2604.06268",
      "likes": 57,
      "date": "2026-04-13",
      "published_date": "Apr 7",
      "abstract": "RL training of multi-turn LLM agents is inherently unstable, andreasoning qualitydirectly determinestask performance.Entropyis widely used to track reasoning stability. However,entropyonly measures diversity within the same input, and cannot tell whether reasoning actually responds to different inputs. In RAGEN-2, we find that even with stableentropy, models can rely on fixed templates that look diverse but are input-agnostic. We call thistemplate collapse, a failure mode invisible toentropyand all existing metrics. To diagnose this failure, we decomposereasoning qualityinto within-input diversity (Entropy) and cross-input distinguishability (Mutual Information, MI), and introduce a family ofmutual informationproxies for online diagnosis. Across diverse tasks,mutual informationcorrelates with final performance much more strongly thanentropy, making it a more reliable proxy forreasoning quality. We further explaintemplate collapsewith asignal-to-noise ratio(SNR) mechanism. Lowreward varianceweakens task gradients, letting regularization terms dominate and erase cross-input reasoning differences. To address this, we propose SNR-Aware Filtering to select high-signal prompts per iteration usingreward varianceas a lightweight proxy. Across planning, math reasoning, web navigation, and code execution, the method consistently improves bothinput dependenceandtask performance.",
      "github_url": "https://github.com/mll-lab-nu/RAGEN",
      "org_tag": "MLL Lab",
      "dimension": "understanding",
      "tech_core": "它发现 Agent RL 里最危险的塌缩不是“输出不够多样”，而是不同输入都套同一套推理模板，所以要用互信息盯住“有没有真在因题而变”。",
      "value": "适合规划 Agent、网页 Agent 和代码 Agent 训练，解决训练曲线看着稳定、实际却越来越套路化，最终一换任务就集体失灵的问题。",
      "pm_suggestion": "如果你在训 Agent RL，把 mutual information 监控接进训练看板；只盯 entropy，会错过最致命的模板化塌缩。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "💰",
        "title": "Agent 交付链开始出现明确付费面",
        "type": "cashcow",
        "action": "预算优先投在代码/终端执行、技能演化、真实网站任务评测和可靠性取证四件事上；客户现在愿意买的是能把活做完的 Agent，不是会聊天的 Agent。",
        "relatedPapers": [
          2,
          4,
          5,
          7,
          12
        ]
      },
      {
        "icon": "🏋️",
        "title": "长推理和长视频的商业化前提是先把成本打下来",
        "type": "efficiency",
        "action": "把 KV 压缩、任务路由式推理加速、训练信号稳定化和简单强基线一起纳入基础设施路线；谁先把长链路算力账单砍掉，谁先有规模化优势。",
        "relatedPapers": [
          10,
          14,
          17,
          20
        ]
      },
      {
        "icon": "🌊",
        "title": "“过程可控的多模态生成”会长出一批新产品",
        "type": "blueocean",
        "action": "别再只卖一次性出图出视频，直接布局带检索、过程编辑、数目约束和几何一致性的生成工作台；下一轮竞争会是可控性，不是炫技样片。",
        "relatedPapers": [
          13,
          15,
          18,
          19
        ]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "Agent 运营控制台",
        "description": "给企业内部 Agent 团队用的控制塔：统一看技能版本、任务完成率、轨迹取证、风险事件和真实网站通过率，不是聊天前台，而是 Agent 的运维后台。",
        "scenes": [
          "企业自动化",
          "代码助手平台",
          "多部门共享 Agent"
        ],
        "relatedPapers": [
          4,
          5,
          12
        ]
      },
      {
        "icon": "🆕",
        "title": "可控视频创作工作台",
        "description": "一个面向广告和电商团队的视频生产台，支持数量约束、镜头连贯、过程续拍和实时指令插入，解决“能生成，但不能交付”的老问题。",
        "scenes": [
          "广告短片",
          "电商商品视频",
          "互动剧情内容"
        ],
        "relatedPapers": [
          6,
          13,
          18
        ]
      },
      {
        "icon": "🆕",
        "title": "工业代码副驾",
        "description": "专门服务芯片、GPU 和嵌入式工程师的代码副驾，能结合编译、仿真和 profiling 结果推演修改后果，不只是补全代码，而是帮你少踩硬件坑。",
        "scenes": [
          "芯片设计",
          "GPU 优化",
          "嵌入式开发"
        ],
        "relatedPapers": [
          2,
          7
        ]
      },
      {
        "icon": "🆕",
        "title": "具身训练云",
        "description": "把 world model、机器人底模、统一仿真和语言鲁棒性测试打包成云平台，让机器人团队先在线上练会看、想、动，再下放到实体设备。",
        "scenes": [
          "机器人训练",
          "低成本仿真验证",
          "边缘设备部署"
        ],
        "relatedPapers": [
          8,
          9,
          16
        ]
      }
    ]
  }
};
