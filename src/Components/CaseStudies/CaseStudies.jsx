import React from 'react';
import './CaseStudies.css';

const PROJECTS = [
  {
    id: 'marriagehall-microservices',
    index: '01',
    title: 'MarriageHall.com — Distributed Microservices Backend',
    metric: 'Zero reservation collisions across high-demand calendar slots',
    metricDetail: 'Stateless JWT auth with role-based authorization (USER, VENDOR, ADMIN) and Eureka/API Gateway dynamic routing.',
    scope: 'Lead Microservices Developer • Cyber Impulses Architecture • Production Grade',
    stack: ['Java 21', 'Spring Boot 3', 'Spring Cloud', 'Eureka Server', 'API Gateway', 'Spring Security', 'JWT', 'MySQL', 'JPA / Hibernate', 'WebClient'],
    summary: 'Architected a decoupled microservices platform (Auth, Hall, Booking, Review) featuring centralized API Gateway routing, Eureka service discovery, and WebClient inter-service communication to coordinate real-time availability checks, booking summaries, and vendor payout workflows.',
    messyMiddle: {
      headline: 'Stateless Gateway Request Propagation & Distributed Transaction Integrity',
      story: 'When splitting the monolithic booking flow into separate Auth, Hall, and Booking microservices, passing user claims securely across services without incurring repeated DB lookups was critical. We implemented JWT claims propagation at the API Gateway layer via custom GlobalFilters, forwarding verified user headers downstream. For concurrent booking submissions, we enforced MySQL row-level pessimistic locks combined with WebClient asynchronous retry mechanisms.',
      tradeOff: 'Trade-off: Required strict circuit-breaker timeouts and standardized RFC-7807 global exception filters across all services, but decoupled independent service deployment cycles.'
    },
    artifactLabel: '[ process artifact — Spring Cloud Gateway filter & WebClient inter-service dispatch ]',
    artifactContent: `// Reactive Gateway header mutation & claims propagation
@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            String token = extractJwt(request);
            jwtUtil.validateToken(token);
            Claims claims = jwtUtil.extractAllClaims(token);

            ServerHttpRequest mutatedRequest = request.mutate()
                .header("X-Auth-User-Id", claims.getSubject())
                .header("X-Auth-Roles", claims.get("roles", String.class))
                .build();

            return chain.filter(exchange.mutate().request(mutatedRequest).build());
        };
    }
}`,
    links: {
      github: 'https://github.com/Ravijaiswal047',
      demo: '#contact'
    }
  },
  {
    id: 'labrox-lims',
    index: '02',
    title: 'Labrox LIMS — Laboratory Information Management System',
    metric: 'Enterprise clinical search across 10M+ records under 80ms',
    metricDetail: 'Architected 9 domain-driven Spring Boot 3 microservices with FDA 21 CFR Part 11 SHA-256 hash-chained audit trails.',
    scope: 'Full Stack Developer • Cyber Impulses Enterprise Build',
    stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL 16', 'Apache Kafka', 'Redis', 'React 18', 'Redux Toolkit', 'OpenSearch 8', 'Docker', 'Spring Security 6', 'Material UI / PrimeReact'],
    summary: 'An enterprise Laboratory Information Management System (LIMS) comprising 9 domain-driven Spring Boot 3 microservices integrated with a React 18 single-page application built with Vite. Engineered clinical patient worklists, sample accessioning state machines, and OpenSearch 8 search across 10M+ clinical records.',
    messyMiddle: {
      headline: 'Server-Side Finite State Machine & SRA Accessioning Guards',
      story: 'In clinical laboratory operations, samples were occasionally submitted directly to department testing queues, bypassing critical pre-analytical accessioning. We engineered a server-side finite state machine enforcing mandatory Sample Receiving Area (SRA) accessioning before Department Receive, backed by HTTP 409 Conflict guards, keyset pagination in PostgreSQL 16, and OpenSearch 8 enterprise indexing for instant lookups across 10M+ records.',
      tradeOff: 'Trade-off: Enforcing strict linear state machine transitions prevented unauthorized technician workflow bypasses and achieved full FDA 21 CFR Part 11 electronic signature compliance.'
    },
    artifactLabel: '[ process artifact — Sample Receiving Area (SRA) State Machine & SHA-256 Audit Trail ]',
    artifactContent: `/* Labrox LIMS: Specimen Custody Finite State Machine
 * [COLLECTED] -> [SRA_ACCESSIONING] -> [DEPARTMENT_RECEIVE] -> [TESTING] -> [VERIFIED]
 *                        |
 *   * HTTP 409 Conflict Guard: Cannot bypass SRA Accessioning
 *   * SHA-256 Hash-Chained Audit Logs for Pathologist Sign-Off
 *   * Keyset pagination & OpenSearch 8 for 10M+ patient records
 */
@Transactional
public SpecimenReceipt accessionSampleAtSRA(UUID specimenId, AccessionDTO dto) {
    Specimen specimen = specimenRepository.findByIdWithLock(specimenId)
        .orElseThrow(() -> new SpecimenNotFoundException("Specimen not found: " + specimenId));

    if (specimen.getStatus() != SpecimenStatus.COLLECTED) {
        throw new InvalidWorkflowStateException("HTTP 409: Sample must be in COLLECTED state prior to SRA accessioning.");
    }

    specimen.setStatus(SpecimenStatus.SRA_RECEIVED);
    specimen.setAuditHash(auditEngine.generateSha256Chain(specimen, dto));
    return specimenRepository.save(specimen);
}`,
    links: {
      github: 'https://github.com/Ravijaiswal047',
      demo: '#contact'
    }
  },
  {
    id: 'cyber-impulses-apis',
    index: '03',
    title: 'Enterprise REST API Modernization (Cyber Impulses)',
    metric: '~40% API latency reduction & ~30% integration effort saved',
    metricDetail: 'Hardened 15+ secured endpoints with role-based Spring Security, payment gateways, and third-party integrations.',
    scope: 'Java Developer • Cyber Impulses Software Solutions (2024–2026)',
    stack: ['Core Java 8+', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Postman', 'Bruno', 'JUnit 5'],
    summary: 'Engineered and shipped enterprise REST APIs for client-facing applications across Agile sprints. Redesigned database schemas, eliminated N+1 query bottlenecks, and standardized Jakarta Bean Validation and DTO mapping contracts.',
    messyMiddle: {
      headline: 'Relational Schema Redesign & Index Optimization Under Heavy Concurrency',
      story: 'Production queries joining multiple customer tables suffered from unindexed foreign key lookups and full table scans during peak business hours. We redesigned database schemas, normalized critical entity tables, introduced composite indexing, and rewrote JPA queries with explicit JPQL join fetches to cut average response times from 280ms down to sub-90ms.',
      tradeOff: 'Trade-off: Schema migrations required planned maintenance windows, but lowered database CPU utilization by 45%.'
    },
    artifactLabel: '[ process artifact — JPQL join optimization & DTO validation specification ]',
    artifactContent: `// High-performance projection query eliminating entity graph overhead
@Repository
public interface ClientOrderRepository extends JpaRepository<ClientOrder, UUID> {

    @Query("""
        SELECT new com.cyberimpulses.dto.OrderSummaryDTO(
            o.id, o.orderNumber, o.status, c.email, o.totalAmount, o.createdAt
        )
        FROM ClientOrder o 
        JOIN o.client c 
        WHERE o.organizationId = :orgId AND o.createdAt >= :startDate
        ORDER BY o.createdAt DESC
    """)
    Page<OrderSummaryDTO> findOrderSummariesFast(
        @Param("orgId") UUID orgId, 
        @Param("startDate") Instant startDate, 
        Pageable pageable
    );
}`,
    links: {
      github: 'https://github.com/Ravijaiswal047',
      demo: '#contact'
    }
  }
];

function CaseStudies() {
  return (
    <section id="work" className="case-studies-section" aria-label="Selected Case Studies">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-kicker">01 // Selected Systems & Production Builds</span>
          <h2 className="section-headline">
            Results first, then the messy middle of engineering.
          </h2>
          <p className="section-lead">
            Production builds reflecting verified implementation code from enterprise experience 
            at Cyber Impulses Software Solutions and distributed microservices architectures.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="case-studies-list">
          {PROJECTS.map((project) => (
            <article key={project.id} className="case-study-card">
              
              {/* Header: Project Index, Role & Metric Banner */}
              <div className="case-study-top">
                <div className="case-meta">
                  <span className="project-index">{project.index}</span>
                  <span className="project-scope">{project.scope}</span>
                </div>
                
                {/* Result / Metric First Principle */}
                <div className="case-metric-badge">
                  <span className="metric-highlight">{project.metric}</span>
                  <span className="metric-context">{project.metricDetail}</span>
                </div>
              </div>

              {/* Title & Core Problem/Solution */}
              <div className="case-main-body">
                <h3 className="case-title">{project.title}</h3>
                <p className="case-summary">{project.summary}</p>
                
                {/* Tech Stack Chips */}
                <div className="tech-chip-row" aria-label="Technologies used">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              {/* The Messy Middle Section */}
              <div className="messy-middle-box">
                <div className="messy-middle-header">
                  <span className="messy-tag">// THE MESSY MIDDLE: REAL ARCHITECTURAL TRADE-OFF</span>
                  <h4 className="messy-title">{project.messyMiddle.headline}</h4>
                </div>
                <p className="messy-story">{project.messyMiddle.story}</p>
                <div className="messy-tradeoff">
                  <strong>Engineering Decision:</strong> {project.messyMiddle.tradeOff}
                </div>
              </div>

              {/* Process Artifact Container */}
              <div className="artifact-container">
                <div className="artifact-bar">
                  <span className="artifact-title">{project.artifactLabel}</span>
                  <span className="artifact-badge">VERIFIED IMPLEMENTATION</span>
                </div>
                <pre className="artifact-code-block" tabIndex="0">
                  <code>{project.artifactContent}</code>
                </pre>
              </div>

              {/* Actions & Links */}
              <div className="case-footer-actions">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-case-link"
                >
                  Inspect Repositories on GitHub (Ravijaiswal047) ↗
                </a>
                <a 
                  href="/Ravi_Jaiswal_Resume.pdf" 
                  download="Ravi_Jaiswal_Resume.pdf"
                  className="btn-case-secondary"
                >
                  Download Full Resume PDF ↓
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;
