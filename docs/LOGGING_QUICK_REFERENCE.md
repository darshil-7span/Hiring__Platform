# 📋 Quick Logging Reference Card

## 🎯 Which Log File to Check?

| Problem | Check This File | Command |
|---------|----------------|---------|
| 🔐 Login/Register issues | `modules/auth.log` | `tail -f logs/modules/auth.log` |
| 💼 Job creation/update | `modules/job.log` | `tail -f logs/modules/job.log` |
| 📝 Application issues | `modules/application.log` | `tail -f logs/modules/application.log` |
| 👤 Candidate profile | `modules/candidate.log` | `tail -f logs/modules/candidate.log` |
| 🏢 Recruiter operations | `modules/recruiter.log` | `tail -f logs/modules/recruiter.log` |
| ❌ Any error | `error.log` | `tail -f logs/error.log` |
| 🔍 See everything | `combined.log` | `tail -f logs/combined.log` |

---

## ⚡ Common Commands

```bash
# Watch logs in real-time
tail -f logs/modules/auth.log

# Search for specific text
grep "user@example.com" logs/modules/auth.log

# Count error lines
grep -c "error" logs/error.log

# Show last 50 lines
tail -50 logs/modules/job.log

# Search across all module logs
grep -r "Database" logs/modules/

# Clear all logs (careful!)
rm logs/*.log logs/modules/*.log

# Archive logs before clearing
tar -czf logs-backup-$(date +%Y%m%d).tar.gz logs/
```

---

## 🚦 Log Levels

| Level | When to Use | Example |
|-------|-------------|---------|
| `error` | Something broke | `logger.error("Database connection failed")` |
| `warn` | Potential issue | `logger.warn("User not found")` |
| `info` | Normal operation | `logger.info("User logged in")` |
| `debug` | Detailed info | `logger.debug("Query executed in 5ms")` |

---

## 📝 Log Format

```
YYYY-MM-DD HH:mm:ss [ModuleName] LEVEL: Message { metadata }

Example:
2026-03-08 10:15:22 [AuthController] info: [LOGIN] User logged in {"userId":14}
```

---

## 🎨 Color Coding (Console)

- 🔴 **Red** = Error
- 🟡 **Yellow** = Warning
- 🟢 **Green** = Info
- 🔵 **Blue** = Debug

---

## 📁 File Locations

```
logs/
├── combined.log          ← Everything
├── error.log             ← Errors only
└── modules/
    ├── auth.log         ← Auth logs
    ├── job.log          ← Job logs
    ├── application.log  ← Application logs
    ├── candidate.log    ← Candidate logs
    ├── recruiter.log    ← Recruiter logs
    └── general.log      ← Other logs
```

---

## 🔧 Configuration

**File:** `.env`
```env
# Set log level (error, warn, info, debug, verbose)
LOG_LEVEL=info

# For production (minimal logs)
LOG_LEVEL=error
```

---

## 💡 Pro Tips

1. **During Development:** Watch module-specific logs
   ```bash
   tail -f logs/modules/auth.log
   ```

2. **When Error Occurs:** Check error.log first
   ```bash
   tail -20 logs/error.log
   ```

3. **For Timeline:** Use combined.log
   ```bash
   grep "user@example.com" logs/combined.log
   ```

4. **Clean Old Logs:** Archive before deleting
   ```bash
   tar -czf logs-$(date +%Y%m%d).tar.gz logs/*.log
   rm logs/*.log logs/modules/*.log
   ```

---

## 🆘 Troubleshooting

**No logs appearing?**
- Check if `logs/modules/` directory exists
- Verify LOG_LEVEL in `.env`
- Check console for Winston errors

**Logs too large?**
- Logs auto-rotate at 10MB
- Old logs automatically deleted after 3 files
- Adjust in `src/utils/logger.ts`

**Memory leak warning?**
- Fixed with logger caching
- Don't create new loggers in loops

---

## 📊 Best Practices

✅ **DO:**
- Watch module-specific logs during development
- Check error.log when debugging
- Archive logs before clearing
- Use appropriate log levels

❌ **DON'T:**
- Log sensitive data (passwords, tokens)
- Create loggers in loops
- Commit .log files to git
- Use console.log in production

---

**Happy Logging! 🎉**
